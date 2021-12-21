import {gql} from '@apollo/client';

const SUBMIT_ROUTE_FEEDBACK_MUTATION = gql`
	mutation SUBMIT_ROUTE_FEEDBACK_MUTATION(
		$routeId: String
		$rating: Int
		$feedback: String
	) {
		createRouteFeedback(
			input: {routeId: $routeId, rating: $rating, feedback: $feedback}
		) {
			feedback
		}
	}
`;

export default SUBMIT_ROUTE_FEEDBACK_MUTATION;
