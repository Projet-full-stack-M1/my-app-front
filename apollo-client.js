
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql', // Remplacez par l'URL de votre API GraphQL
  cache: new InMemoryCache()
});

export default client;
