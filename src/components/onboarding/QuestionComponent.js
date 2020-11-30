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
  state,
  setState,
  doUpdateTask,
  setLoadingQuestion,
}) => {
  const renderQuestionType = () => {
    switch (currentTask.type) {
      case questionTypes.CONFIRM:
        return (
          <Confirm
            currentTask={currentTask}
            updateTask={updateTask}
            refetch={refetch}
            setLoadingQuestion={setLoadingQuestion}
          />
        );
      case questionTypes.GO_BACK:
        return <GoBack currentTask={currentTask} doRevertTask={doRevertTask} />;

      case questionTypes.YES_OR_NO:
        return (
          <YesOrNo
            currentTask={currentTask}
            doRevertTask={doRevertTask}
            state={state}
            setState={setState}
            doUpdateTask={doUpdateTask}
          />
        );
      case questionTypes.DATE_OF_BIRTH:
        return (
          <DateOfBirth
            currentTask={currentTask}
            doRevertTask={doRevertTask}
            state={state}
            setState={setState}
            doUpdateTask={doUpdateTask}
          />
        );
      case questionTypes.MULTIPLE_CHOICES:
        return (
          <MultipleChoice
            currentTask={currentTask}
            doRevertTask={doRevertTask}
            state={state}
            setState={setState}
            doUpdateTask={doUpdateTask}
          />
        );

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
