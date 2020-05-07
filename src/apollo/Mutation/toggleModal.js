import {gql} from '@apollo/client';

const TOGGLE_MODAL = gql`
  mutation TOGGLE_MODAL($pings: Int!) {
    toggleModal(pings: $pings) @client
  }
`;

export default TOGGLE_MODAL;
