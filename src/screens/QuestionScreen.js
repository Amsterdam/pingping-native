import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useMutation, useQuery} from '@apollo/client';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import ErrorComponent from '../components/shared/ErrorComponent';
import QuestionSkeleton from '../components/skeleton/QuestionSkeleton';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import REVERT_TASK_MUTATION from '../apollo/Mutation/revertTaskMutation';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import QuestionComponent from '../components/onboarding/QuestionComponent';

const QuestionScreen = ({navigation}) => {
  const {data, loading, error, refetch} = useQuery(GET_STATUS_QUERY);
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION);
  const [revertTask] = useMutation(REVERT_TASK_MUTATION);
  const current = data?.getStatus?.currentTask;
  const answeredBefore = current?.answer;
  const currentTask = current?.task;
  const previousTask = data?.getStatus?.previousTask?.task;

  const doRevertTask = async () => {
    if (!previousTask?.taskId) {
      return navigation.goBack();
    }
    try {
      await revertTask({
        variables: {taskId: previousTask.taskId},
      });
      await refetch();
    } catch (e) {
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

  if (loading) {
    return (
      <View style={styles.skeleton}>
        <QuestionSkeleton />
      </View>
    );
  }

  if (data && currentTask) {
    return (
      <QuestionComponent
        currentTask={currentTask}
        updateTask={updateTask}
        refetch={refetch}
        doRevertTask={doRevertTask}
        answeredBefore={answeredBefore}
      />
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  skeleton: {flex: 1, paddingVertical: 100, paddingHorizontal: 40},
});

QuestionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
