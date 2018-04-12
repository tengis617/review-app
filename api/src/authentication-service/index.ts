import * as Router from 'koa-router'
import * as Service from './service'

const r = new Router({ prefix: '/auth'})

r.post('/register', async (ctx, next) => {
  try {
    const { email, password } = ctx.request.body
    const token = await Service.register({ email, password })
    ctx.body = { ok:true, token }
  } catch (e) {
    ctx.status = 500
    ctx.body = (e.message)
  }
})

r.post('/login', async (ctx, next) => {
  const { email, password } = ctx.request.body
  const result = await Service.login({ email, password })
  ctx.body = result
})
r.get('/me', async (ctx, next) => {
  try {
    const access_token = ctx.headers['x-access-token']
    if (!access_token) return ctx.status(401).body({ auth: false, message: 'No token provided.' })
    const decoded = await Service.verifyToken({ access_token })
    ctx.body = decoded
  } catch (e) {
    ctx.throw(401, 'authentication failed', e)
  }
})

export default r