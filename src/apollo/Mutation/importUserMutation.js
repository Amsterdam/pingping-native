import {gql} from '@apollo/client';

const IMPORT_USER_MUTATION = gql`
  mutation IMPORT_USER_MUTATION) {
    importUser {
      message
    }
  }
`;

export default IMPORT_USER_MUTATION;
