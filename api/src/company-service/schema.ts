import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools'
import * as Service from './service'

export const typeDefs = `
  extend type Query {
    company(id: String!): Company
    companies: [Company]
  }
  type Company {
    id: String,
    name: String,
    description: String,
  }
`

export const resolvers = {
  Query: {
    companies: () => Service.getAllCompanies(),
    company: (root, args) => Service.getCompanyById(args.id),
  },
}
