import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools'

const companies = [
  {
    name: 'kfc',
    description: 'fried chicken'
  },
  {
    name: 'mcdonalds',
    description: 'burgers with fries'
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { companies: [Company] }
  type Company { name: String, description: String }
`;

// The resolvers
const resolvers = {
  Query: { companies: () => companies },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});


export default schema