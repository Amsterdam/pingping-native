import {gql} from '@apollo/client';

const REGISTER_DEVICE_MUTATION = gql`
  mutation registerDevice(
    $deviceId: String!
    $deviceOs: String
    $deviceType: String
    $exportToken: String
  ) {
    registerDevice(
      input: {
        deviceId: $deviceId
        deviceOs: $deviceOs
        deviceType: $deviceType
        exportToken: $exportToken
      }
    ) {
      accessToken
      user {
        id
      }
    }
  }
`;

export default REGISTER_DEVICE_MUTATION;
