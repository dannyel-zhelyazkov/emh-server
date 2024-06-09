import { User } from '@/models'
import { Services } from '@/services'
import { NextFunction, Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const accessToken = req.headers?.['authorization']?.split('Bearer ')[1]
  const refreshToken = req.cookies?.['refreshToken']

  try {
    const decoded = Services.Auth.verifyToken(
      accessToken as string,
    ) as JwtPayload

    const user = await User.findOne({
      where: { user_id: decoded.user_id },
    })

    if (!user) return res.status(401).send({ error: 'User not found!' })

    req.body.user = user

    next()
  } catch (error) {
    if (!refreshToken) {
      return res
        .status(401)
        .send({ error: 'Access Denied. No refresh token provided.' })
    }

    try {
      const decoded = Services.Auth.verifyToken(refreshToken) as JwtPayload
      const accessToken = Services.Auth.generateAccessToken(decoded.user_id)

      const user = await User.findOne({
        where: { user_id: decoded.user_id },
      })

      if (!user) return res.status(401).send({ error: 'User not found!' })

      res
        .cookie('refreshToken', refreshToken, {
          httpOnly: true,
          sameSite: 'strict',
        })
        .header('Authorization', accessToken)

      req.body.user = user

      next()
    } catch (error) {
      return res.status(400).send({ error: 'Invalid Token.' })
    }
  }
}
