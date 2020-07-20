import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Content, Container} from 'native-base';
import {useQuery, useMutation} from '@apollo/client';
import {appColors} from '../lib/colors';
import Button from '../components/Button';
import SimpleHeader from '../components/header/SimpleHeader';
import QuestionComponent from '../components/QuestionComponent';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
  label: {fontSize: 20, color: appColors.primary},
  button: {alignSelf: 'flex-end'},

  buttonContainer: {
    justifyContent: 'flex-end',
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
  const currentTask = data && data.getStatus.currentTask;
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
      const taskResp = await updateTask({
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
      console.log(taskResp);
      setState(INITIAL_STATE);
    } catch (error) {
      console.log(error);
      navigation.navigate('NotificationDecisionScreen');
    }
  };

  return (
    <Container>
      <SimpleHeader navigation={navigation} color="white" />
      <Content contentContainerStyle={styles.content}>
        {data && (
          <React.Fragment>
            <QuestionComponent
              question={currentTask.title}
              taskId={currentTask.taskId}
              type={currentTask.type}
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
};

export default QuestionScreen;
