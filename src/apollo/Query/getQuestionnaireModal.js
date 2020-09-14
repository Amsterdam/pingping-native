import {gql} from '@apollo/client';

const GET_QUESTIONNAIRE_MODAL = gql`
  query GET_QUESTIONNAIRE_MODAL {
    questionnaireModalOpen @client
  }
`;

export default GET_QUESTIONNAIRE_MODAL;
