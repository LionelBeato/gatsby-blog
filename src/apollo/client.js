import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
uri: 'https://aqueous-reef-83072.herokuapp.com/graphql',
fetch,
})