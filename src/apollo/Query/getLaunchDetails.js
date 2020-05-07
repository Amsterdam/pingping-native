import {gql} from '@apollo/client';

const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      isInCart @client
      site
      rocket {
        type
      }
    }
  }
`;

export default GET_LAUNCH_DETAILS;
