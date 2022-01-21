import React from 'react';

import PropTypes from 'prop-types';

import Confirm from './answerTypes/Confirm';
import DateOfBirth from './answerTypes/DateOfBirth';
import GoBack from './answerTypes/GoBack';
import MultipleChoice from './answerTypes/MultipleChoice';
import YesOrNo from './answerTypes/YesOrNo';

import { QUESTION_TYPES } from '../../config/constants';
import UpdateApp from '../shared/UpdateApp';

const QuestionComponent = ({
	currentTask,
	refetch,
	doRevertTask,
	state,
	setState,
	doUpdateTask,
	setLoadingQuestion,
	animationRef,
	doUpdateConfirmTask,
}) => {
	const renderQuestionType = () => {
		switch (currentTask.type) {
			case QUESTION_TYPES.CONFIRM:
				return (
					<Confirm
						currentTask={currentTask}
						doUpdateConfirmTask={doUpdateConfirmTask}
						refetch={refetch}
						setLoadingQuestion={setLoadingQuestion}
						animationRef={animationRef}
					/>
				);
			case QUESTION_TYPES.GO_BACK:
				return <GoBack currentTask={currentTask} doRevertTask={doRevertTask} />;

			case QUESTION_TYPES.YES_OR_NO:
				return (
					<YesOrNo
						currentTask={currentTask}
						doRevertTask={doRevertTask}
						state={state}
						setState={setState}
						doUpdateTask={doUpdateTask}
					/>
				);
			case QUESTION_TYPES.DATE_OF_BIRTH:
				return (
					<DateOfBirth
						currentTask={currentTask}
						doRevertTask={doRevertTask}
						state={state}
						setState={setState}
						doUpdateTask={doUpdateTask}
					/>
				);
			case QUESTION_TYPES.MULTIPLE_CHOICES:
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
				// If there is no match for the question type then we can assume that the question is not implemented yet
				// in the current version of the app. Therefore we will show a message to the user that the app is to be updated.
				// This is mainly an issue for current users of the app who end up in the onboarding again. This is very unlikely
				// but at least we can handle it.
				return <UpdateApp />;
		}
	};
	return renderQuestionType();
};

QuestionComponent.propTypes = {
	currentTask: PropTypes.object.isRequired,
};

export default QuestionComponent;
