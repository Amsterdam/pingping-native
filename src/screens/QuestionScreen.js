import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import PropTypes from 'prop-types';
import ErrorComponent from '../components/shared/ErrorComponent';
import QuestionSkeleton from '../components/skeleton/QuestionSkeleton';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import REVERT_TASK_MUTATION from '../apollo/Mutation/revertTaskMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import QuestionComponent from '../components/onboarding/QuestionComponent';
import {
  setRevertedQuestionValues,
  submitAnswer,
} from '../helpers/questionAnswerHelpers';

const INITIAL_STATE = {
  answerSelected: false,
  day: '',
  month: '',
  year: '',
  choices: [],
};

const QuestionScreen = ({navigation}) => {
  const {data, loading, error, refetch} = useQuery(GET_STATUS_QUERY);
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION);
  const [revertTask] = useMutation(REVERT_TASK_MUTATION);
  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const current = data?.getStatus?.currentTask;
  const answeredBefore = current?.answer;
  const currentTask = current?.task;
  const previousTask = data?.getStatus?.previousTask?.task;
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    if (answeredBefore) {
      setRevertedQuestionValues(currentTask, answeredBefore, setState);
    }
  }, [answeredBefore, currentTask, navigation]);

  const doRevertTask = async () => {
    setLoadingQuestion(true);
    if (!previousTask?.taskId) {
      return navigation.goBack();
    }
    try {
      await revertTask({
        variables: {taskId: previousTask.taskId},
      });
      await refetch();
      setLoadingQuestion(false);
    } catch (e) {
      setLoadingQuestion(false);
      console.log(e);
    }
  };

  if (error) {
    return (
      <ErrorComponent
        functionToRetry={refetch}
        somethingWentWrong
        onPress={() => navigation.goBack()}
      />
    );
  }

  if (data && currentTask) {
    const doUpdateTask = () => {
      submitAnswer(
        currentTask,
        state,
        setLoadingQuestion,
        updateTask,
        setState,
        refetch,
        INITIAL_STATE,
      );
    };
    return (
      <View style={{flex: 1}}>
        {!loadingQuestion && (
          <QuestionComponent
            currentTask={currentTask}
            updateTask={updateTask}
            refetch={refetch}
            doRevertTask={doRevertTask}
            state={state}
            setState={setState}
            doUpdateTask={doUpdateTask}
            setLoadingQuestion={setLoadingQuestion}
          />
        )}

        {(loadingQuestion || loading) && <QuestionSkeleton />}
      </View>
    );
  }
  return <QuestionSkeleton />;
};

QuestionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
