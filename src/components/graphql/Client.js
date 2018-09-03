import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import { API_URL, AUTH_TOKEN_KEY } from '../../utils/constants';
import { getItemFromLocalStorage } from '../../utils/localStorage';

// change this anything your backend prefixes the auth token with
const TOKEN_PREFIX = 'Bearer ';

const httpLink = new createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers = {} }) => {
  const token = getItemFromLocalStorage(AUTH_TOKEN_KEY);

  //  add authorization header if token exists
  if (token) headers['Authorization'] = `${TOKEN_PREFIX}${token}`;

  return {
    headers,
  };
});

const httpLinkWithAuth = authLink.concat(httpLink);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLinkWithAuth,
});

export default client;
