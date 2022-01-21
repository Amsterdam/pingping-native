import sentryHelper from './sentryHelper';

import { QUESTION_TYPES } from '../config/constants';

// submits an answer and formats the variables for the mutation in order to save according to correct questiontype
export const submitAnswer = async (
	currentTask,
	state,
	setLoadingQuestion,
	updateTask,
	setState,
	refetch,
	INITIAL_STATE,
	animationRef
) => {
	let answer = '';
	answer = state.answerSelected;
	switch (currentTask.type) {
		case QUESTION_TYPES.DATE_OF_BIRTH:
			answer = `${state.year}-${state.month}-${state.day}`;
			break;
		case QUESTION_TYPES.MULTIPLE_CHOICES:
			answer = state.choices.join();
			break;
		default:
			answer = state.answerSelected;
			break;
	}
	setLoadingQuestion(true);
	try {
		await updateTask({
			variables: {
				answer,
				taskId: currentTask.taskId,
			},
		});
		await refetch();
		setState(INITIAL_STATE);
		setLoadingQuestion(false);
		animationRef.current?.fadeIn();
	} catch (error) {
		sentryHelper(error.message);
		setLoadingQuestion(false);
	}
};

export const updateConfirmTask = async (
	answer,
	updateTask,
	currentTask,
	refetch,
	animationRef,
	setLoadingQuestion
) => {
	setLoadingQuestion(true);
	try {
		await updateTask({
			variables: {
				answer,
				taskId: currentTask.taskId,
			},
		});
		await refetch();
		setLoadingQuestion(false);
		animationRef.current?.slideInRight();
	} catch (error) {
		setLoadingQuestion(false);
		sentryHelper(error.message);
	}
};

// revert a task and enables the user to go back within the questions flow
export const revertTaskFunc = async (
	setLoadingQuestion,
	previousTask,
	navigation,
	refetch,
	revertTask,
	animationRef
) => {
	setLoadingQuestion(true);
	if (!previousTask?.taskId) {
		return navigation.goBack();
	}
	try {
		await revertTask({
			variables: { taskId: previousTask.taskId },
		});
		await refetch();
		setLoadingQuestion(false);
		return animationRef.current?.fadeIn();
	} catch (error) {
		setLoadingQuestion(false);
		return sentryHelper(error.message);
	}
};

// sets the reverted questions answer value to the state - so the user can see what his previous answer was
export function setRevertedQuestionValues(currentTask, answer, setState) {
	if (currentTask.type === QUESTION_TYPES.DATE_OF_BIRTH) {
		const splitDate = answer.split('-');
		setState((state) => ({
			...state,
			year: splitDate[0],
			month: splitDate[1],
			day: splitDate[2],
		}));
	}
	if (currentTask.type === QUESTION_TYPES.YES_OR_NO) {
		setState((state) => ({
			...state,
			answerSelected: answer,
		}));
	}
	if (currentTask.type === QUESTION_TYPES.MULTIPLE_CHOICES) {
		setState((state) => ({
			...state,
			choices: answer.split(','),
		}));
	}
}

// checks if the next button on the question screen should be disabled/enabled
export const checkDisabled = (currentTask, state) => {
	switch (currentTask.type) {
		case QUESTION_TYPES.DATE_OF_BIRTH:
			return !state.day || !state.month || !state.year;
		case QUESTION_TYPES.MULTIPLE_CHOICES:
			return state.choices.length < 1;
		default:
			return !state.answerSelected;
	}
};
