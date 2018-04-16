import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as Router from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import { ApolloEngine } from 'apollo-engine'
import * as compress from 'koa-compress'
import * as koaBody from 'koa-bodyparser'

import Config from './config'
import { verifyToken } from './authentication-service/service'
import schema from './schema'

const app = new Koa()
const router = new Router()
app.use(compress())
app.use(cors())

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.post(
  '/graphql',
  koaBody(),
  graphqlKoa(async (req) => {
    let id
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = await verifyToken(token)
      id = decoded.id
    }
    return {
      cacheControl: true,
      context: { userId: id },
      schema,
      tracing: true,
    }
  }),
)
router.get('/graphql', graphqlKoa({ schema }))

app.use(router.routes())
app.use(router.allowedMethods())
const engine = new ApolloEngine({
  apiKey: Config.APOLLO_ENGINE_API_KEY,
})

engine.listen({
  graphqlPaths: ['/graphql'],
  koaApp: app,
  launcherOptions: {
    startupTimeout: 3000,
  },
  port: Config.PORT,
}, () => {
  console.log(`listening on port ${Config.PORT}`)
})
