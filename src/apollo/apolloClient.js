import {ApolloClient, createHttpLink, InMemoryCache, gql} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from '@apollo/link-context';
import unfetch from 'unfetch';
import GET_MODAL_STATE from './Query/getModalState';
import {API_URL} from '../config/initialSettings';
import GET_QUESTIONNAIRE_MODAL from './Query/getQuestionnaireModal';

const inMemoryCache = new InMemoryCache();

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('@access_token');
  // return the headers to the context so httpLink can read them
  console.log({token});
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: API_URL,
  fetch: unfetch,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: inMemoryCache,
  resolvers: {
    Mutation: {
      toggleModal: (_root, variables, {cache}) => {
        const {modalOpen} = cache.readQuery({
          query: GET_MODAL_STATE,
        });

        cache.writeQuery({
          query: gql`
            {
              modalOpen
              pings
            }
          `,
          data: {
            modalOpen: !modalOpen,
            pings: variables.pings,
          },
        });
        return null;
      },
      questionnaireModal: (_root, variables, {cache}) => {
        cache.writeQuery({
          query: gql`
            {
              questionnaireModalOpen
              routeId
            }
          `,
          data: {
            questionnaireModalOpen: variables.questionnaireModalOpen,
          },
        });
        return null;
      },
    },
  },
});

async function writeInitialData() {
  await inMemoryCache.writeQuery({
    query: GET_MODAL_STATE,
    data: {
      pings: 1,
      modalOpen: false,
    },
  });
  await inMemoryCache.writeQuery({
    query: GET_QUESTIONNAIRE_MODAL,
    data: {
      questionnaireModalOpen: false,
    },
  });

  return;
}

export async function resetStore() {
  await client.clearStore();
  await writeInitialData();
  await client.reFetchObservableQueries();
}

writeInitialData();

export default client;
