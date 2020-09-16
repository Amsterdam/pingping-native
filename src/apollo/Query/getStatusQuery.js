import {gql} from '@apollo/client';

const GET_STATUS_QUERY = gql`
  query getStatus {
    getStatus {
      user {
        balance
      }
      device {
        id
        token
        notificationStatus
      }
      currentTask {
        status
        task {
          taskId
          title
          description
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
