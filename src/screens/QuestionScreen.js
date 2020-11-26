import React from 'react';
import {StyleSheet} from 'react-native';
import {useMutation} from '@apollo/client';
import UPDATE_TASK_MUTATION from '../apollo/Mutation/updateTaskMutation';
import REVERT_TASK_MUTATION from '../apollo/Mutation/revertTaskMutation';
import PropTypes from 'prop-types';
import {useQuery} from '@apollo/client';
import GET_STATUS_QUERY from '../apollo/Query/getStatusQuery';
import QuestionComponent from '../components/onboarding/QuestionComponent';

const QuestionScreen = ({navigation}) => {
  const {data, loading, error, refetch} = useQuery(GET_STATUS_QUERY);
  const [updateTask] = useMutation(UPDATE_TASK_MUTATION);
  const [revertTask] = useMutation(REVERT_TASK_MUTATION);
  const current = data?.getStatus?.currentTask;
  const currentTask = current?.task;
  const previousTask = data?.getStatus?.previousTask?.task;
  console.log({data});

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

  if (data && currentTask) {
    return (
      <QuestionComponent
        currentTask={currentTask}
        updateTask={updateTask}
        refetch={refetch}
        doRevertTask={doRevertTask}
      />
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  content: {flex: 1, padding: 20},
  icon: {
    color: '#000',
    fontSize: 32,
  },
  flex: {flex: 1},
});

QuestionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default QuestionScreen;
