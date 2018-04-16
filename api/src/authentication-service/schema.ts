import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools'
import * as Service from './service'

const typeDefs = `
  type User {
    id: String
    email: String
    image: String
  }
  type Query {
    currentUser: User
  }
  type Mutation {
    login(email: String!, password: String!): User
    signup(email: String!, password: String!): User
  }
`

const resolvers = {
  Query: {
    currentUser: async (root, args, context) => {
      if (!context.userId) {
        return { }
      }
      const user = await Service.me(context.userId)
      return user
    },
  },
  Mutation: {
    login: async (root, { email, password }) => {
      const user = await Service.login({ email, password })
      return user
    },
    signup: (root, { email, password }) => {
      // TODO: Make this real
      return {
        email: 't@task.com',
        id: 'user1',
      }
    },
  },
}

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default schema
