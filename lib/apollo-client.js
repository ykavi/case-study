import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://8eo74n.sse.codesandbox.io/graphql',
  cache: new InMemoryCache(),
});

export default client;
