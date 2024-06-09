import { Services } from '@/services'
import { Request, Response } from 'express'
import { Error } from 'sequelize'

export const AuthController = () => {
  const login = async (req: Request, res: Response) => {
    try {
      const user = await Services.User.authenticateUser(req.body)

      if (!user)
        return res.status(401).send({ error: 'Incorrect email or password' })

      const token = Services.Auth.generateAccessToken(user.user_id)
      const refreshToken = Services.Auth.generateRefreshToken(user.user_id)

      res
        .cookie('refreshToken', refreshToken, {
          httpOnly: true,
          sameSite: 'strict',
        })
        .header('Authorization', token)
        .send({ user })
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const logout = async (req: Request, res: Response) => {
    try {
      res
        .clearCookie('refreshToken', {
          httpOnly: true,
          sameSite: 'strict',
          expires: new Date(0),
        })
        .send({ message: 'Successfully logged out' })
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  return { login, logout }
}
