import { ConnectionOptions } from 'typeorm'

const myEntities = process.env.TYPEORM_DIRECTORY_ENTITIES || ''
const myMigrations = process.env.TYPEORM_DIRECTORY_MIGRATIONS || ''

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  cache: true,
  ssl: {
    rejectUnauthorized: false
  },
  entities: [myEntities],
  migrations: [myMigrations],
  cli: {
    entitiesDir: process.env.TYPEORM_DIRECTORY_SAVE_ENTITIES,
    migrationsDir: process.env.TYPEORM_DIRECTORY_SAVE_MIGRATIONS
  }
}

export default connectionOptions
