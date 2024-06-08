

"use client"; 

import { ApolloProvider as Provider } from '@apollo/client';
import client from '@/graphql/apollo_client';

export default function ApolloProvider({ children }) {
  return <Provider client={client}>{children}</Provider>;
}
