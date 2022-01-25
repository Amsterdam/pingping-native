import { gql } from '@apollo/client';

import MEDIA_FRAGMENT from '../Fragment/mediaFragment';
import REWARD_FRAGMENT from '../Fragment/rewardFragment';

const GET_STATUS_QUERY = gql`
	query getStatus {
		getStatus {
			exportToken
			user {
				balance
				rewards {
					id
					reward {
						...RewardFragment
					}
					status
					barcodeImageUrl
					data
				}
			}
			device {
				id
				token
				notificationStatus
			}
			currentTask {
				status
				answer
				task {
					taskId
					title
					meta
					description
					choices
					type
					progress
					headerTitle
					media {
						...MediaFragment
					}
				}
			}
			previousTask {
				status
				task {
					taskId
					title
					description
					choices
					type
					progress
					headerTitle
				}
			}
		}
	}
	${REWARD_FRAGMENT}
	${MEDIA_FRAGMENT}
`;

export default GET_STATUS_QUERY;
