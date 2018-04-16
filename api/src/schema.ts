import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools'

import {
  typeDefs as AuthSchema,
  resolvers as AuthResolvers,
} from './authentication-service/schema'
import {
  typeDefs as CompanySchema,
  resolvers as CompanyResolvers,
} from './company-service/schema'

const Query = `
  type Query {
    _empty: String
  }
`
const Mutation = `
  type Mutation {
    _empty: String
  }
`

const rootResolver = {}
const schema = makeExecutableSchema({
  resolvers: merge(rootResolver, CompanyResolvers, AuthResolvers),
  typeDefs: [Query, Mutation, AuthSchema, CompanySchema],
})

export default schema
