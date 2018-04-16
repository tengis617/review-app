const Config = {
  ARANGO_DB_NAME: process.env.ARANGO_DB_NAME || 'review-app',
  ARANGO_PASSWORD: process.env.ARANGO_PASSWORD || 'admin',
  ARANGO_URL: process.env.ARANGO_URL || 'http://127.0.0.1:8529',
  ARANGO_USER: process.env.ARANGO_USER || 'root',
  JWT_SECRET: process.env.JWT_SECRET || 'defaultsecret',
  PORT: process.env.PORT || 8080,
}

export default Config
