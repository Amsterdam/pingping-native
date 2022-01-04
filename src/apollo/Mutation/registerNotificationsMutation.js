import { gql } from '@apollo/client';

const REGISTER_NOTIFICATIONS_MUTATION = gql`
	mutation REGISTER_NOTIFICATIONS_MUTATION(
		$input: RegisterNotificationsInput!
	) {
		registerNotifications(input: $input) {
			id
			token
		}
	}
`;

export default REGISTER_NOTIFICATIONS_MUTATION;
