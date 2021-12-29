import { gql } from '@apollo/client';

const REGISTER_NOTIFICATIONS_MUTATION = gql`
	mutation REGISTER_NOTIFICATIONS_MUTATION(
		$deviceToken: String!
		$notificationStatus: NotificationStatus!
	) {
		registerNotifications(
			input: {
				notificationStatus: $notificationStatus
				deviceToken: $deviceToken
			}
		) {
			id
			token
		}
	}
`;

export default REGISTER_NOTIFICATIONS_MUTATION;
