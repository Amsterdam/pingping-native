import {questionTypes} from '../config/questionTypes';

export function setRevertedQuestionValues(currentTask, current, setState) {
  if (currentTask.type === questionTypes.DATE_OF_BIRTH) {
    const splitDate = current.answer.split('-');
    setState((state) => ({
      ...state,
      year: splitDate[0],
      month: splitDate[1],
      day: splitDate[2],
    }));
  }
  if (currentTask.type === questionTypes.YES_OR_NO) {
    setState((state) => ({
      ...state,
      answerSelected: current.answer,
    }));
  }
  if (currentTask.type === questionTypes.MULTIPLE_CHOICES) {
    setState((state) => ({
      ...state,
      choices: current.answer.split(','),
    }));
  }
}
