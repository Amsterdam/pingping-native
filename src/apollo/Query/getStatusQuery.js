import {gql} from '@apollo/client';
import REWARD_FRAGMENT from '../Fragment/rewardFragment';

const GET_STATUS_QUERY = gql`
  query getStatus {
    getStatus {
      exportToken
      user {
        balance
        rewards {
          id
          reward {
            ...RewardFragment
          }
          status
          barcodeImageUrl
          data
        }
      }
      device {
        id
        token
        notificationStatus
      }
      currentTask {
        status
        answer
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
  ${REWARD_FRAGMENT}
`;

export default GET_STATUS_QUERY;
