import { defineDatabase } from '@/database'
import '@/database'
import { authMiddleware } from '@/middlewares/auth.middleware'
import {
  authRoute,
  departmentRoute,
  employeeRoute,
  userRoute,
  roleRoute,
} from '@/routes'
import cors from 'cors'
import cookies from 'cookie-parser'
import dotenv from 'dotenv'
import express, { Application } from 'express'

//For env File
dotenv.config()

const app: Application = express()
const port = process.env.APP_PORT || 8000

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    exposedHeaders: 'Authorization',
  }),
)
app.use(express.json())
app.use(cookies())

app.use('/auth', authRoute)
app.use('/users', authMiddleware, userRoute)
app.use('/roles', authMiddleware, roleRoute)
app.use('/departments', authMiddleware, departmentRoute)
app.use('/employees', authMiddleware, employeeRoute)

app.listen(port, async () => {
  console.log(`Server is Fire at http://localhost:${port}`)
  await defineDatabase()
})
