import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'

import Config from './config'
import reviewService from './review-service'
import companyService from './company-service'
import authenticationService from './authentication-service'

const app = new Koa()
app.use(bodyParser())
app.use(cors())

app.use(companyService.routes())
app.use(authenticationService.routes())

app.listen(Config.PORT, () => console.log(`listening on port ${Config.PORT}`))