import {gql} from '@apollo/client';

const REVERT_TASK_MUTATION = gql`
  mutation REVERT_TASK_MUTATION($taskId: String!) {
    revertTask(taskId: $taskId)
  }
`;

export default REVERT_TASK_MUTATION;
