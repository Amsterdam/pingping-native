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

const QuestionComponent = ({ currentTask, state, setState, doUpdateTask, doUpdateConfirmTask }) => {
	const renderQuestionType = () => {
		switch (currentTask.type) {
			case QUESTION_TYPES.CONFIRM:
				return (
					<Confirm currentTask={currentTask} doUpdateConfirmTask={doUpdateConfirmTask} />
				);
			case QUESTION_TYPES.GO_BACK:
				return <GoBack currentTask={currentTask} />;

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
						doUpdateConfirmTask={doUpdateConfirmTask}
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
	state: PropTypes.object.isRequired,
	setState: PropTypes.func.isRequired,
	doUpdateTask: PropTypes.func.isRequired,
	doUpdateConfirmTask: PropTypes.func.isRequired,
};

export default QuestionComponent;
