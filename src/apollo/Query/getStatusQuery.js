import {gql} from '@apollo/client';

const GET_STATUS_QUERY = gql`
  query getStatus {
    getStatus {
      user {
        balance
      }
      currentTask {
        status
        task {
          taskId
          title
          description
          media
          choices
          type
          progress
          headerTitle
        }
      }
      previousTask {
        status
        task {
          taskId
          title
          description
          media
          choices
          type
          progress
          headerTitle
        }
      }
    }
  }
`;

export default GET_STATUS_QUERY;
