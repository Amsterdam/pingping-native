import {gql} from '@apollo/client';

const IMPORT_USER_MUTATION = gql`
	mutation IMPORT_USER_MUTATION($exportToken: String!) {
		importUser(exportToken: $exportToken) {
			message
		}
	}
`;

export default IMPORT_USER_MUTATION;
