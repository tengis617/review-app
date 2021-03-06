import * as Service from './service'

export const typeDefs = `
  type User {
    id: String
    email: String
    image: String
    token: String
  }
  extend type Query {
    currentUser: User
    user(id: String!): User
  }
  extend type Mutation {
    login(email: String!, password: String!): User
    signup(email: String!, password: String!): User
  }
`

export const resolvers = {
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
  Query: {
    currentUser: async (root, args, context) => {
      if (!context.userId) {
        return {}
      }
      const user = await Service.me(context.userId)
      return user
    },
  },
}
