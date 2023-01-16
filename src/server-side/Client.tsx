import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { RetryLink } from "apollo-link-retry";

export const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: "https://api-us-east-1.hygraph.com/v2/cku8onzwd44mz01xnb6n16f2k/master",
  }).concat(new RetryLink()),
  cache: new InMemoryCache(),
});
