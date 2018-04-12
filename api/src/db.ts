import { Database } from 'arangojs'
import Config from './config'

const db = new Database(Config.ARANGO_URL)
db.useDatabase(Config.ARANGO_DB_NAME)
db.useBasicAuth(Config.ARANGO_USER, Config.ARANGO_PASSWORD)

export default db