import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

function createClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://172.20.10.4:4000',
    }),
    cache: new InMemoryCache(),
  });
}
export default createClient;
