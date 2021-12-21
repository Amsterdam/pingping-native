import {gql} from '@apollo/client';

const START_ROUTE_MUTATION = gql`
	mutation START_ROUTE_MUTATION($routeId: String!) {
		startRoute(answer: $answer) {
			route {
				progress
			}
		}
	}
`;

export default START_ROUTE_MUTATION;
