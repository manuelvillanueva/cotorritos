import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.GATSBY_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});
