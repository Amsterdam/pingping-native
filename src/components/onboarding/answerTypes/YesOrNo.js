import React, {useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../onboarding/AnswerButtonOnboarding';
import AnswerTemplate from './AnswerTemplate';
import {checkDisabled} from '../../../helpers/questionAnswerHelpers';

const YesOrNo = ({
  currentTask = {},
  doRevertTask = () => {},
  updateTask = () => {},
  refetch = () => {},
}) => {
  const [answer, setAnswerSelected] = useState('');
  const mapButtons = () => {
    const buttonArray = [];
    for (const [key, value] of Object.entries(currentTask.choices)) {
      buttonArray.push(
        <Button
          label={value}
          key={key}
          active={key === answer}
          onPress={() => setAnswerSelected(key)}
          testid={`${key}_BUTTON`.toUpperCase()}
        />,
      );
    }
    return buttonArray;
  };

  const doUpdateTask = async () => {
    try {
      await updateTask({
        variables: {
          answer,
          taskId: currentTask.taskId,
        },
      });
      setAnswerSelected('');
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const nextButtonDisabled = checkDisabled(currentTask, answer);
  return (
    <AnswerTemplate
      currentTask={currentTask}
      nextButtonDisabled={nextButtonDisabled}
      doRevertTask={doRevertTask}
      doUpdateTask={doUpdateTask}>
      <View>{mapButtons()}</View>
    </AnswerTemplate>
  );
};

YesOrNo.propTypes = {
  currentTask: PropTypes.object.isRequired,
  doRevertTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default YesOrNo;
