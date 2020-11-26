import React from 'react';
import PropTypes from 'prop-types';
import DateOfBirth from './answerTypes/DateOfBirth';
import YesOrNo from './answerTypes/YesOrNo';
import Confirm from './answerTypes/Confirm';
import GoBack from './answerTypes/GoBack';
import MultipleChoice from './answerTypes/MultipleChoice';
import {questionTypes} from '../../config/questionTypes';

const QuestionComponent = ({
  currentTask,
  updateTask,
  refetch,
  doRevertTask,
}) => {
  const renderQuestionType = () => {
    switch (currentTask.type) {
      case questionTypes.CONFIRM:
        return (
          <Confirm
            currentTask={currentTask}
            updateTask={updateTask}
            refetch={refetch}
          />
        );
      case questionTypes.YES_OR_NO:
        return (
          <YesOrNo
            currentTask={currentTask}
            updateTask={updateTask}
            refetch={refetch}
            doRevertTask={doRevertTask}
          />
        );
      case questionTypes.DATE_OF_BIRTH:
        return (
          <DateOfBirth
            currentTask={currentTask}
            doRevertTask={doRevertTask}
            updateTask={updateTask}
            refetch={refetch}
          />
        );
      case questionTypes.MULTIPLE_CHOICES:
        return (
          <MultipleChoice
            currentTask={currentTask}
            updateTask={updateTask}
            refetch={refetch}
            doRevertTask={doRevertTask}
          />
        );
      case questionTypes.GO_BACK:
        return <GoBack currentTask={currentTask} doRevertTask={doRevertTask} />;
      default:
        break;
    }
  };
  return renderQuestionType();
};

QuestionComponent.propTypes = {
  currentTask: PropTypes.object.isRequired,
};

export default QuestionComponent;
