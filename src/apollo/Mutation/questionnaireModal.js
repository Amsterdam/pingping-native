import {gql} from '@apollo/client';

const QUESTIONNAIRE_MODAL = gql`
  mutation questionnaireModal(
    $questionnaireModalOpen: Boolean!
    $routeId: String!
  ) {
    questionnaireModal(
      questionnaireModalOpen: $questionnaireModalOpen
      routeId: $routeId
    ) @client
  }
`;

export default QUESTIONNAIRE_MODAL;
