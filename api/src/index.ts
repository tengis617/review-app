import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as Router from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'

import Config from './config'
import companyService from './company-service'
import authenticationService from './authentication-service'

const app = new Koa()
const router = new Router({ prefix: '/'})
app.use(bodyParser())
app.use(cors())

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql'}))
app.use(companyService.routes())
app.use(companyService.allowedMethods())
app.use(authenticationService.routes())
app.use(authenticationService.allowedMethods())
app.listen(Config.PORT, () => console.log(`listening on port ${Config.PORT}`))
