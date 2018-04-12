
const Config = {
  PORT: process.env.PORT || 8080,
  ARANGO_USER: process.env.ARANGO_USER || 'root',
  ARANGO_PASSWORD: process.env.ARANGO_PASSWORD || 'admin',
  ARANGO_URL: process.env.ARANGO_URL || 'http://127.0.0.1:8529',
  ARANGO_DB_NAME: process.env.ARANGO_DB_NAME || 'review-app',
  JWT_SECRET: process.env.JWT_SECRET || 'defaultsecret'
}


export default Config