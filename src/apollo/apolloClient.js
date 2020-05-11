import {ApolloClient, HttpLink, InMemoryCache, gql} from '@apollo/client';
import GET_MODAL_STATE from './Query/getModalState';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
  cache: cache,
  resolvers: {
    Mutation: {
      toggleModal: (_root, variables, {cache}) => {
        const {modalOpen} = cache.readQuery({
          query: GET_MODAL_STATE,
        });
        console.log(variables.pings);
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
