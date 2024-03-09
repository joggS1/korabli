import {
  ApolloClient,
  ApolloProvider as ApolloLibProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import type { FC } from 'react';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_BACKEND_API_URL as string
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});
interface Props {
  children: React.ReactNode;
}

export const ApolloProvider: FC<Props> = ({ children }) => (
  <ApolloLibProvider client={client}>{children}</ApolloLibProvider>
);
