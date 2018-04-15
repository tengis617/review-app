import * as Router from 'koa-router'
import * as koaBody from 'koa-bodyparser'
import { aql } from 'arangojs'
import * as uuidv4 from 'uuid/v4'
import db from '../db'
import * as Service from './service'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import schema from './schema'


const r = new Router({ prefix: '/company'})

r.post('/', koaBody(), graphqlKoa({ schema }))
r.get('/', graphqlKoa({ schema }))
r.get('/graphiql', graphiqlKoa({ endpointURL: '/company' }))

r.get('/all', async (ctx, next) => {
  try {
    const companies = await Service.getAllCompanies()
    ctx.body = companies
  } catch (e) {
    ctx.status = 500
  }
})

r.get('/:id', async (ctx, next) => {
  const { id } = ctx.params
  const company = await Service.getCompanyById(id)
  ctx.body = company
})

r.post('/create', async (ctx, next) => {
  const id = uuidv4()
  const company = ctx.request.body
  const newCompany = await Service.createCompany({
    ...company,
    _key: id
  })
  ctx.body = newCompany
})


export default r