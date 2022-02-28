import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import * as Sentry from '@sentry/react-native';

import { API_URL, asyncStorageKeys } from '../config/constants';
import { SENTRY_DSN } from '../config/keys';
import { getFromAsyncStorage } from '../helpers/asyncStorageHelpers';

// init sentry if production
if (!__DEV__) {
	Sentry.init({
		dsn: SENTRY_DSN,
	});
}

const inMemoryCache = new InMemoryCache();

const authLink = setContext(async (_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = await getFromAsyncStorage(asyncStorageKeys.accessToken);
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

// creates an errorlink that will send errors to sentry
const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message }) => Sentry.captureMessage(message));
	}
	if (networkError) {
		Sentry.captureException(networkError);
	}
});

const httpLink = createHttpLink({
	uri: API_URL,
});

const client = new ApolloClient({
	link: authLink.concat(errorLink).concat(httpLink),
	cache: inMemoryCache,
	resolvers: {
		Mutation: {},
	},
});

export async function resetStore() {
	await client.clearStore();
	await client.reFetchObservableQueries();
}

export default client;
