import {gql} from '@apollo/client';

const UPDATE_TASK_MUTATION = gql`
  mutation updateTask($answer: String!, $taskId: String) {
    updateTask(input: {answer: $answer, taskId: $taskId}) {
      nextTask {
        title
        status
        taskId
        answer
        description
        icon
      }
    }
  }
`;

export default UPDATE_TASK_MUTATION;
