import { Controllers } from '@/controllers'
import { authMiddleware } from '@/middlewares/auth.middleware'
import express, { Request, Response } from 'express'

export const authRoute = express.Router()

authRoute.post('/login', Controllers.Auth.login)

authRoute.post('/token', authMiddleware, (req: Request, res: Response) => {
  res.send(req.body)
})

authRoute.post('/logout', Controllers.Auth.logout)
