
// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri:  process.env.NEXT_PUBLIC_BACKEND_API+'/graphql', 
//   cache: new InMemoryCache(),
// });

// export default client;

// services/apollo-client.js

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_API + '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
