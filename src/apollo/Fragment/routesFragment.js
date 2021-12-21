import {gql} from '@apollo/client';

import MEDIA_FRAGMENT from './mediaFragment';

const ROUTES_FRAGMENT = gql`
	fragment RoutesFragment on RouteResponse {
		routeId
		title
		description
		isSuggested
		numberOfSteps
		totalPoints
		targetAudience
		progress
		hasSubmittedFeedback
		cover {
			...MediaFragment
		}
		tips {
			title
			description
		}
		tasks {
			status
			answer
			task {
				taskId
				title
				headerTitle
				description
				media {
					...MediaFragment
				}
				choices
				progress
			}
		}
	}
	${MEDIA_FRAGMENT}
`;

export default ROUTES_FRAGMENT;
