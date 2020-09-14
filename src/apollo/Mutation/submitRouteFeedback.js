import {gql} from '@apollo/client';

const SUBMIT_ROUTE_FEEDBACK_MUTATION = gql`
  mutation SUBMIT_ROUTE_FEEDBACK_MUTATION(
    $taskName: String!
    $description: String!
    $routeName: String!
  ) {
    createRouteFeedback(
      taskName: $taskName
      description: $description
      routeName: $routeName
    ) {
      routeId
    }
  }
`;

export default SUBMIT_ROUTE_FEEDBACK_MUTATION;
