import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../onboarding/AnswerButtonOnboarding';
import AnswerTemplate from './AnswerTemplate';
import {checkDisabled} from '../../../helpers/questionAnswerHelpers';

const YesOrNo = ({
  currentTask = {},
  doRevertTask = () => {},
  doUpdateTask = () => {},
  state = {},
  setState = () => {},
}) => {
  const mapButtons = () => {
    const buttonArray = [];
    for (const [key, value] of Object.entries(currentTask.choices)) {
      buttonArray.push(
        <Button
          label={value}
          key={key}
          active={key === state.answerSelected}
          onPress={() => setState({...state, answerSelected: key})}
          testid={`${key}_BUTTON`.toUpperCase()}
        />,
      );
    }
    return buttonArray;
  };

  const nextButtonDisabled = checkDisabled(currentTask, state);
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
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default YesOrNo;
