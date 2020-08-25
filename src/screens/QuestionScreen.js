import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {
  Content,
  Container,
  Header,
  Right,
  Left,
  Button as NbButton,
  Icon,
} from 'native-base';
import Title from '../components/typography/Title';
import {useQuery, useMutation} from '@apollo/client';
import {appColors, ppBaseColors} from '../lib/colors';
import Button from '../components/Button';
import QuestionComponent from '../components/QuestionComponent';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import * as Progress from 'react-native-progress';

// write a transition component

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
  label: {fontSize: 20, color: appColors.primary},
  button: {alignSelf: 'flex-end'},
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: appColors.primary,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  icon: {
    color: '#000',
    fontSize: 32,
  },
});

const INITIAL_STATE = {
  answerSelected: false,
  day: '',
  month: '',
  year: '',
};

const QuestionScreen = ({navigation}) => {
  // refactor this
  const [state, setState] = React.useState(INITIAL_STATE);
  const {data, loading, error} = useQuery(GET_STATUS_QUERY);
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION);

  if (loading || error) {
    return <Text>Loading</Text>;
  }

  if (data && !data.getStatus.currentTask) {
    navigation.navigate('NotificationDecisionScreen');
  }

  if (data && data.getStatus.currentTask) {
    const currentTask = data && data.getStatus.currentTask.task;
    const checkDisabled = () => {
      if (currentTask.type === 'DateOfBirth') {
        return !state.day || !state.month || !state.year;
      }
      return !state.answerSelected;
    };

    const submitAnswer = async () => {
      let answer = '';

      answer = state.answerSelected;

      if (currentTask.type === 'DateOfBirth') {
        answer = `${state.year}-${state.month}-${state.day}`;
      }
      try {
        await updateTask({
          variables: {
            answer,
            taskId: currentTask.taskId,
          },
          refetchQueries: [
            {
              query: GET_STATUS_QUERY,
            },
          ],
        });
        setState(INITIAL_STATE);
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Container>
        <Header style={styles.header} transparent noShadow>
          <StatusBar barStyle="dark-content" />
          <Left>
            <NbButton transparent onPress={() => navigation.goBack()}>
              <Icon name="arrowleft" type="AntDesign" style={styles.icon} />
            </NbButton>
          </Left>
          <Title style={styles.headerTitle}>
            {currentTask && currentTask.headerTitle}
          </Title>

          <Right>
            <View>
              <Progress.Bar
                progress={data.getStatus.currentTask.task.progress}
                width={50}
                color={appColors.secondary}
                unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
                borderWidth={0}
                height={10}
              />
            </View>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.content}>
          {data && (
            <React.Fragment>
              <QuestionComponent
                currentTask={currentTask}
                setState={setState}
                answerSelected={state.answerSelected}
                day={state.day}
                month={state.month}
                year={state.year}
                state={state}
                navigation={navigation}
              />
              <View style={styles.buttonContainer}>
                <Button
                  onPress={submitAnswer}
                  label="Volgende"
                  transparent
                  disabled={checkDisabled()}
                  labelStyle={styles.label}
                  style={styles.button}
                />
              </View>
            </React.Fragment>
          )}
        </Content>
      </Container>
    );
  }
  return <></>;
};

export default QuestionScreen;
