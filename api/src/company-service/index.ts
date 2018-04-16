import * as Router from 'koa-router'
import * as Endpoints from './endpoints'

const r = new Router({ prefix: '/company' })

r.get('/all', Endpoints.getCompanies)
r.get('/:id', Endpoints.getCompany)
r.post('/create', Endpoints.createCompany)


export default r