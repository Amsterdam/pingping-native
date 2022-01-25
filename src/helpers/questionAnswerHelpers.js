import sentryHelper from './sentryHelper';

import { QUESTION_TYPES } from '../config/constants';

/**
 * @async
 * @function submitAnswer
 * Submits an answer and formats the variables for the mutation in order to save according
 * to correct questiontype. If it is called with an answer then it will submit the answer.
 * if not then it will format the variables for the mutation.
 * @param {Object} currentTask - The current task to be rendered.
 * @param {Object} state - The state of the the QuestionScreen.
 * @param {Callback} setLoadingQuestion - The function to set the loading state of the questionScreen.
 * @param {Callback} updateTask - The function to update the task.
 * @param {Callback} setState - The setState function of the QuestionScreen.
 * @param {Callback} refetch - The refetch function of the QuestionScreen.
 * @param {Object} INITIAL_STATE - The state initial of the the QuestionScreen.
 * @param {Callback} animationRef - A reference to the animation, to simulate a page change.
 * @param {String} answer - The answer to be submitted.
 */

export const submitAnswer = async (
	currentTask = {},
	state = {},
	setLoadingQuestion = () => {},
	updateTask = () => {},
	setState = () => {},
	refetch = () => {},
	INITIAL_STATE = {},
	animationRef = () => {},
	answer = ''
) => {
	let answerToSubmit = answer;
	if (!answerToSubmit) {
		switch (currentTask.type) {
			case QUESTION_TYPES.DATE_OF_BIRTH:
				answerToSubmit = `${state.year}-${state.month}-${state.day}`;
				break;
			case QUESTION_TYPES.MULTIPLE_CHOICES:
				answerToSubmit = state.choices.join();
				break;
			default:
				answerToSubmit = state.answerSelected;
				break;
		}
	}
	setLoadingQuestion(true);
	try {
		await updateTask({
			variables: {
				answer: answerToSubmit,
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

/**
 * @async
 * @function revertTaskFunc
 * Calls the backend to revert the currentTask to the previous saved task in order.
 * @param {Callback} setLoadingQuestion - The callback to set the loading state of the questionScreen.
 * @param {Object} previousTask - The previous task in the order.
 * @param {Object} navigation - Navigation object.
 * @param {Callback} refetch - The refetch callback of the QuestionScreen.
 * @param {Callback} revertTask - The mutation to revert to the previous task.n.
 * @param {Callback} animationRef - The answer to be submitted.
 */

export const revertTaskFunc = async (
	setLoadingQuestion = () => {},
	previousTask = {},
	navigation = {},
	refetch = () => {},
	revertTask = () => {},
	animationRef = () => {}
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

/**
 * @function setRevertedQuestionValues
 * Sets the reverted questions answer value to the state,so the user can see what his previous answer was
 * @param {Object} currentTask - The current task in the order.
 * @param {String} answer - the answer of the previous task, that needs to be set to the current.
 * @param {Callback} setState - The setState function of the QuestionScreen.
 */
export function setRevertedQuestionValues(currentTask = {}, answer = '', setState = () => {}) {
	if (currentTask.type === QUESTION_TYPES.DATE_OF_BIRTH) {
		const splitDate = answer.split('-');
		return setState((state) => ({
			...state,
			year: splitDate[0],
			month: splitDate[1],
			day: splitDate[2],
		}));
	}
	if (currentTask.type === QUESTION_TYPES.MULTIPLE_CHOICES) {
		return setState((state) => ({
			...state,
			choices: answer.split(','),
		}));
	}
	return setState((state) => ({
		...state,
		answerSelected: answer,
	}));
}

/**
 * @function setRevertedQuestionValues
 * Checks if the next button on the question screen should be disabled/enabled
 * @param {Object} currentTask - The current task in the order.
 * @param {Object} state - The state of the QuestionScreen.
 */
export const checkDisabled = (currentTask = {}, state = {}) => {
	switch (currentTask.type) {
		case QUESTION_TYPES.DATE_OF_BIRTH:
			return !state.day || !state.month || !state.year;
		case QUESTION_TYPES.MULTIPLE_CHOICES:
			return state.choices.length < 1;
		default:
			return !state.answerSelected;
	}
};
