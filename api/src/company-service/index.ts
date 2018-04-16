import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa'
import { aql } from 'arangojs'
import * as koaBody from 'koa-bodyparser'
import * as Router from 'koa-router'
import * as uuidv4 from 'uuid/v4'
import db from '../db'
import schema from './schema'
import * as Service from './service'

const r = new Router()

r.post(
  '/',
  koaBody(),
  graphqlKoa({ schema }),
)
r.get('/', graphqlKoa({ schema }))

export default r
