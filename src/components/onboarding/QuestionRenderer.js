import React from 'react';

import PropTypes from 'prop-types';

import Confirm from './questionTypes/Confirm';
import DateOfBirth from './questionTypes/DateOfBirth';
import DropDownSelect from './questionTypes/DropDownSelect';
import GoBack from './questionTypes/GoBack';
import MultipleChoice from './questionTypes/MultipleChoice';
import YesOrNo from './questionTypes/YesOrNo';

import { QUESTION_TYPES } from '../../config/constants';
import UpdateApp from '../shared/UpdateApp';

/**
 * @component QuestionRenderer
 * Component for rendering different types of questions.
 * @param {Object} currentTask - The current task to be rendered.
 * @param {Object} state - The state of the parent screen controls the state of the child component.
 * @param {Function} setState - The setState function of the parent screen controls the state of the child component.
 * @param {Function} doUpdateTask - The function to update the task.
 */

const QuestionRenderer = ({
	currentTask,
	state,
	setState,
	doUpdateTask,
	doRevertTask,
	scrollToBottom,
}) => {
	const renderQuestionType = () => {
		switch (currentTask.type) {
			case QUESTION_TYPES.CONFIRM:
				return <Confirm currentTask={currentTask} doUpdateTask={doUpdateTask} />;
			case QUESTION_TYPES.GO_BACK:
				return <GoBack currentTask={currentTask} doRevertTask={doRevertTask} />;

			case QUESTION_TYPES.YES_OR_NO:
				return (
					<YesOrNo
						currentTask={currentTask}
						state={state}
						setState={setState}
						doUpdateTask={doUpdateTask}
					/>
				);
			case QUESTION_TYPES.DATE_OF_BIRTH:
				return (
					<DateOfBirth
						currentTask={currentTask}
						state={state}
						setState={setState}
						doUpdateTask={doUpdateTask}
					/>
				);
			case QUESTION_TYPES.MULTIPLE_CHOICES:
				return (
					<MultipleChoice
						currentTask={currentTask}
						state={state}
						setState={setState}
						doUpdateTask={doUpdateTask}
					/>
				);
			case QUESTION_TYPES.DROPDOWN_SELECT:
				return (
					<DropDownSelect
						currentTask={currentTask}
						doUpdateTask={doUpdateTask}
						state={state}
						setState={setState}
						scrollToBottom={scrollToBottom}
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

QuestionRenderer.propTypes = {
	currentTask: PropTypes.object.isRequired,
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
	doRevertTask: PropTypes.func.isRequired,
};

export default QuestionRenderer;
