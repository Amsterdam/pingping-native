import {gql} from '@apollo/client';

const UPDATE_TASK_MUTATION = gql`
  mutation updateTask($answer: String!, $taskId: String!) {
    updateTask(input: {answer: $answer, taskId: $taskId}) {
      previousTask {
        status
        task {
          taskId
        }
      }
      nextTask {
        status
        task {
          taskId
        }
        answer
      }
    }
  }
`;

export default UPDATE_TASK_MUTATION;
