import {gql} from '@apollo/client';

const CLAIM_REWARD_MUTATION = gql`
  mutation CLAIM_REWARD_MUTATION($rewardId: String!) {
    claimReward(rewardId: $answer) {
      id
      reward
      status
      barcodeImageUrl
    }
  }
`;

export default CLAIM_REWARD_MUTATION;