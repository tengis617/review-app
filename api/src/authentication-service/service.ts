import * as JWT from 'jsonwebtoken'
import * as Bcrypt from 'bcryptjs'
import * as uuidv4 from 'uuid/v4'
import Config from '../config'
import db from '../db'
import { aql } from 'arangojs'

export const register = async ({ email, password }) => {
  const hashedPassword = Bcrypt.hashSync(password, 8)
  const user = {
    _key: uuidv4(),
    created: Date.now(),
    email,
    hashedPassword,
  }
  const newUser = await db.collection('users').save(user)
  const access_token = JWT.sign({ id: user._key }, Config.JWT_SECRET, {
    expiresIn: 86400, // expires in 24 hours
  })
  return access_token
}

export const me = async (id) => {
  const cursor = await db.query(aql`
    FOR u in users
      FILTER u._key == ${id}
      RETURN u
  `)
  const userResult = await cursor.all()
  const user = userResult[0]
  return user
}
export const login = async ({ email, password }) => {
  const cursor = await db.query(aql`
    FOR u in users
      FILTER u.email == ${email}
      RETURN u
  `)
  const userResult = await cursor.all()
  const user = userResult[0]
  if (!user) {
    throw new Error('invalid email or password')
  }
  const passwordIsValid = Bcrypt.compareSync(password, user.hashedPassword);
  if (!passwordIsValid) {
    throw new Error('invalid email or password')
  }
  const access_token = JWT.sign({ id: user._key }, Config.JWT_SECRET, {
    expiresIn: 86400, // expires in 24 hours
  })
  return {
    access_token,
  }
}

export const verifyToken = async (token) => JWT.verify(token, Config.JWT_SECRET)
