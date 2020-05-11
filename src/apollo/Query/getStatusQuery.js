import {gql} from '@apollo/client';

const GET_STATUS_QUERY = gql`
  query getStatus {
    getStatus {
      currentTask {
        title
        answer
        taskId
        status
        description
        icon
        type
        progressPercentile
      }
    }
  }
`;

export default GET_STATUS_QUERY;
