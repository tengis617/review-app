import * as Router from 'koa-router'
import { aql } from 'arangojs'
import uuidv4 from 'uuid/v4'
import db from '../db'

const r = new Router()

r.get('/all', async (req, res) => {
  try {
    const cursor = await db.query(aql`
    FOR r IN reviews
      RETURN r
    `)
    const reviews = await cursor.all()
    res.send(reviews)
  } catch (e) {
    res.status(500).send(e.message)
  }
})

r.get('/', async (req, res) => {
  const { id } = req.body
  const cursor = await db.query(aql`
    RETURN DOCUMENT(${id})
  `)
  const review = await cursor.all()
  console.log(review)
  res.send(review)
})

r.post('/create', async (req, res) => {
  const id = uuidv4()
  const review = req.body
  const c = await db.query(aql`
  INSERT ${review} INTO reviews
  RETURN NEW
  `)
  const newReview = await c.all()
  res.send(newReview)
})


export default r