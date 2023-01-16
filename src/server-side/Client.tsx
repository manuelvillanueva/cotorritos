import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { RetryLink } from "apollo-link-retry";

export const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.GATSBY_GRAPHCMS_ENDPOINT,
  }).concat(
    new RetryLink({
      delay: {
        initial: 60000,
        max: Infinity,
        jitter: true,
      },
    })
  ),
  cache: new InMemoryCache(),
});
