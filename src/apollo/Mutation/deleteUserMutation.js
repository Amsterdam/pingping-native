import {gql} from '@apollo/client';

const DELETE_USER_MUTATION = gql`
  mutation DELETE_USER_MUTATION($confirm: String!) {
    deleteUser(confirm: $confirm) {
      message
    }
  }
`;

export default DELETE_USER_MUTATION;
