import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()
export const sequelize = new Sequelize({
  host: process.env.APP_DB_HOST,
  dialect: 'postgres',
  database: process.env.APP_DB_NAME,
  username: process.env.APP_DB_USER,
  password: `${process.env.APP_DB_PASSWORD}`,
  port: 5432,
  logging: false,
})

export * from './postgres.database'
