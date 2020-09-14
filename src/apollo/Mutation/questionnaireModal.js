import {gql} from '@apollo/client';

const QUESTIONNAIRE_MODAL = gql`
  mutation questionnaireModal($questionnaireModalOpen: Boolean!) {
    questionnaireModal(questionnaireModalOpen: $questionnaireModalOpen) @client
  }
`;

export default QUESTIONNAIRE_MODAL;
