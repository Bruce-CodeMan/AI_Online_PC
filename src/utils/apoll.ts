/*
 * @Date: 2023-08-04 09:08:13
 * @Author: Bruce Hsu
 * @Description: 
 */
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// Custom Imports
import { AUTH_TOKEN } from "@/utils/constant";

const uri = "/graphql"

const httpLink = createHttpLink({
  uri
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      Authorization: token? `Bearer ${token}`: ""
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
})
