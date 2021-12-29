import React from 'react';

import PropTypes from 'prop-types';

import Confirm from './answerTypes/Confirm';
import DateOfBirth from './answerTypes/DateOfBirth';
import GoBack from './answerTypes/GoBack';
import MultipleChoice from './answerTypes/MultipleChoice';
import YesOrNo from './answerTypes/YesOrNo';

import { questionTypes } from '../../config/questionTypes';

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
			case questionTypes.CONFIRM:
				return (
					<Confirm
						currentTask={currentTask}
						doUpdateConfirmTask={
							doUpdateConfirmTask
						}
						refetch={refetch}
						setLoadingQuestion={
							setLoadingQuestion
						}
						animationRef={animationRef}
					/>
				);
			case questionTypes.GO_BACK:
				return (
					<GoBack
						currentTask={currentTask}
						doRevertTask={doRevertTask}
					/>
				);

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
