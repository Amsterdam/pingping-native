import React, {useRef, useState} from 'react';
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
import PropTypes from 'prop-types';
import Title from '../components/typography/Title';
import {useQuery, useMutation} from '@apollo/client';
import {appColors, ppBaseColors} from '../lib/colors';
import Button from '../components/Button';
import QuestionComponent from '../components/QuestionComponent';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import ProgressBar from '../components/ProgressBar';
import Loading from '../components/LoadingComponent';
import * as Animatable from 'react-native-animatable';

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
  flex: {flex: 1},
});

const INITIAL_STATE = {
  answerSelected: false,
  day: '',
  month: '',
  year: '',
  choices: [],
};

const QuestionScreen = ({navigation}) => {
  // refactor this
  const [state, setState] = useState(INITIAL_STATE);
  const {data, loading, error, refetch} = useQuery(GET_STATUS_QUERY);
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION);
  const animationRef = useRef(null);

  if (error) {
    return <Text>Something went very wrong</Text>;
  }
  if (loading) {
    return <Loading />;
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
      if (currentTask.type === 'MultipleChoices') {
        return state.choices.length < 1;
      }
      return !state.answerSelected;
    };

    const submitAnswer = async () => {
      let answer = '';

      answer = state.answerSelected;

      switch (currentTask.type) {
        case 'DateOfBirth':
          answer = `${state.year}-${state.month}-${state.day}`;
          break;
        case 'MultipleChoices':
          answer = state.choices.join();
          break;
        default:
          break;
      }
      setLoadingQuestion(true);
      try {
        await updateTask({
          variables: {
            answer,
            taskId: currentTask.taskId,
          },
        });
        setState(INITIAL_STATE);
        await refetch();
        console.log('waiting');
        setLoadingQuestion(false);
        animationRef.current?.fadeIn();
      } catch (e) {
        console.log(e);
        setLoadingQuestion(false);
      }
    };

    return (
      <Container>
        <Header style={styles.header} transparent noShadow>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={appColors.background}
          />
          <Left style={styles.flex}>
            <NbButton transparent onPress={() => navigation.goBack()}>
              <Icon name="arrowleft" type="AntDesign" style={styles.icon} />
            </NbButton>
          </Left>
          <Title style={styles.headerTitle}>
            {currentTask && currentTask.headerTitle}
          </Title>

          <Right>
            <View>
              <ProgressBar
                progress={data.getStatus.currentTask.task.progress}
                width={50}
                color={appColors.secondary}
                unfilledColor={ppBaseColors.PP_LIGHT_GRAY}
                borderWidth={0}
                height={10}
                useNativeDriver
                animationType="timing"
              />
            </View>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.content}>
          {data && (
            <Animatable.View
              style={{flex: 1}}
              easing="linear"
              duration={800}
              ref={animationRef}
              animation="fadeIn"
              useNativeDriver>
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
            </Animatable.View>
          )}
          {loadingQuestion && <Loading />}
        </Content>
      </Container>
    );
  }
  return <></>;
};

QuestionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
