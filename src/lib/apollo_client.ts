import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apollo_client = new ApolloClient({
  link: new HttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
}); 