import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools'
import * as Service from './service'

const typeDefs = `
  type Query {
    companies: [Company]
    getCompanyById(id: String!): Company
  }
  type Company {
    id: String,
    name: String,
    description: String,
  }
`

const resolvers = {
  Query: {
    companies: () => Service.getAllCompanies(),
    getCompanyById: (root, args) => Service.getCompanyById(args.id),
  },
}

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default schema
