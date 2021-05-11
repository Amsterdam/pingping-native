import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/link-context';
import AsyncStorage from '@react-native-community/async-storage';
import * as Sentry from '@sentry/react-native';
import unfetch from 'unfetch';

import {API_URL} from '../config/initialSettings';
import {SENTRY_DSN} from '../config/keys';

if (!__DEV__) {
  Sentry.init({
    dsn: SENTRY_DSN,
  });
}

const inMemoryCache = new InMemoryCache();

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('@access_token');
  // return the headers to the context so httpLink can read them
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
    Mutation: {},
  },
});

async function writeInitialData() {
  return;
}

export async function resetStore() {
  await client.clearStore();
  await writeInitialData();
  await client.reFetchObservableQueries();
}

writeInitialData();

export default client;
