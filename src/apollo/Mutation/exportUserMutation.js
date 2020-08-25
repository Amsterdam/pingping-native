import {gql} from '@apollo/client';

const EXPORT_USER_MUTATION = gql`
  mutation EXPORT_USER_MUTATION) {
    exportUser {
      token
    }
  }
`;

export default EXPORT_USER_MUTATION;
