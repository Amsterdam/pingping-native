import {gql} from '@apollo/client';

const GET_ACHIEVEMENTS_QUERY = gql`
	query GET_ACHIEVEMENTS_QUERY {
		getAchievements {
			achievementId
			title
			description
			points
			status
			icon
			earnedDate
		}
	}
`;

export default GET_ACHIEVEMENTS_QUERY;
