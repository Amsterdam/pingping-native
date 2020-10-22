import {gql} from '@apollo/client';

const GET_MODAL_STATE = gql`
  query GET_MODAL_STATE {
    pings @client
    modalOpen @client
  }
`;

export default GET_MODAL_STATE;
