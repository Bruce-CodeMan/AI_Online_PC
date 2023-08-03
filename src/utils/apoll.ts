import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// Custom Imports
import { AUTH_TOKEN, HTTP_LINK } from "@/utils/constant";



const httpLink = createHttpLink({
  uri: HTTP_LINK
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
