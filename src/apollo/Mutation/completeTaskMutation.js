import { gql } from '@apollo/client';

const COMPLETE_TASK_MUTATION = gql`
	mutation COMPLETE_TASK_MUTATION(
		$taskId: String!
	) {
		completeTask(taskId: $taskId) {
			previousTask {
				status
			}
		}
	}
`;

export default COMPLETE_TASK_MUTATION;
