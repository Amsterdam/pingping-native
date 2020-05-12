import {ApolloClient, createHttpLink, InMemoryCache, gql} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from '@apollo/link-context';
import GET_MODAL_STATE from './Query/getModalState';

const cache = new InMemoryCache();

const authLink = setContext(async (_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('@access_token');
  // return the headers to the context so httpLink can read them
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
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
    },
  },
});

function writeInitialData() {
  cache.writeQuery({
    query: GET_MODAL_STATE,
    data: {
      pings: 1,
      modalOpen: false,
    },
  });
}

writeInitialData();

export default client;
