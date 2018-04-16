import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools'
import * as Service from './service'

export const typeDefs = `
  extend type Query {
    company(id: String!): Company
    companies: [Company]
  }
  extend type Mutation {
    createCompany(company: Company!): Company
  }
  type Company {
    id: String,
    name: String,
    description: String,
  }
`

export const resolvers = {
  Mutation: {
    createCompany: (root, args) => Service.createCompany(args.company),
  },
  Query: {
    companies: () => Service.getAllCompanies(),
    company: (root, args) => Service.getCompanyById(args.id),
  },
}
