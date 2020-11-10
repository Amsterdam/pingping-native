import {ApolloClient, InMemoryCache, createHttpLink, gql} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import * as Sentry from '@sentry/react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from '@apollo/link-context';
import unfetch from 'unfetch';
import GET_MODAL_STATE from './Query/Local/getModalState';
import {API_URL} from '../config/initialSettings';
import GET_QUESTIONNAIRE_MODAL from './Query/Local/getQuestionnaireModal';
import GET_CLAIMED_REWARD_MODAL from './Query/Local/getClaimedRewardModalState';

Sentry.init({
  dsn:
    'https://a302605b019943859ae466e19980c244@o458828.ingest.sentry.io/5457049',
});

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

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) => {
      return Sentry.captureMessage(message);
    });
  }
  if (networkError) {
    Sentry.captureException(networkError);
  }
});

const httpLink = createHttpLink({
  uri: API_URL,
  fetch: unfetch,
});

const client = new ApolloClient({
  link: authLink.concat(errorLink).concat(httpLink),
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
      claimedRewardModal: (_root, variables, {cache}) => {
        cache.writeQuery({
          query: gql`
            {
              claimedRewardModalOpen
              data {
                pin
                code
              }
              rewardId
              title
              description
              imageUrl
            }
          `,
          data: {
            ...variables,
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
  await inMemoryCache.writeQuery({
    query: GET_CLAIMED_REWARD_MODAL,
    data: {
      claimedRewardModalOpen: false,
      data: {pin: '', code: ''},
      title: '',
      description: '',
      imageUrl: '',
      rewardId: '',
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
