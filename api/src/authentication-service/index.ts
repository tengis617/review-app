import {  graphiqlKoa, graphqlKoa} from 'apollo-server-koa'
import * as koaBody from 'koa-bodyparser'
import * as Router from 'koa-router'
import * as Service from './service'

import { verifyToken } from '../authentication-service/service'
import schema from './schema'

const r = new Router()

r.post(
  '/graphql',
  koaBody(),
  graphqlKoa(async (req) => {
    const token = req.headers.authorization.split(' ')[1]
    const { id } = await verifyToken(token)
    return { schema, context: { userId: id } }
  }),
)
r.get('/graphql', graphqlKoa({ schema }))

export default r
