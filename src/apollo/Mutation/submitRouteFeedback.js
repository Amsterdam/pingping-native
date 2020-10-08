import {gql} from '@apollo/client';

const SUBMIT_ROUTE_FEEDBACK_MUTATION = gql`
  mutation SUBMIT_ROUTE_FEEDBACK_MUTATION(
    $taskName: String
    $routeId: String
    $routeName: String!
    $feedback: String!
  ) {
    createRouteFeedback(
      input: {
        routeId: $routeId
        taskName: $taskName
        routeName: $routeName
        feedback: $feedback
      }
    ) {
      feedback
    }
  }
`;

export default SUBMIT_ROUTE_FEEDBACK_MUTATION;
