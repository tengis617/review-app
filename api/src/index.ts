import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import * as Router from 'koa-router'
import * as compress from 'koa-compress'
import * as koaBody from 'koa-bodyparser'

import Config from './config'
import CompanyService from './company-service'

const app = new Koa()

app.use(compress())
app.use(cors())
app.use(koaBody())

app.use(CompanyService.routes())

app.listen(Config.PORT, () => console.log(`listening on port: ${Config.PORT}`))