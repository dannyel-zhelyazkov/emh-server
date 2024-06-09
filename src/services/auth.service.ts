import jwt, { JwtPayload } from 'jsonwebtoken'
import process from 'process'

export const AuthService = () => {
  const generateAccessToken = (user_id: string) => {
    return jwt.sign({ user_id }, process.env.APP_SECRET_KEY as string, {
      expiresIn: '1h',
    })
  }

  const generateRefreshToken = (user_id: string) => {
    return jwt.sign({ user_id }, process.env.APP_SECRET_KEY as string, {
      expiresIn: '30d',
    })
  }

  const verifyToken = (token: string): string | JwtPayload => {
    return jwt.verify(token, process.env.APP_SECRET_KEY as string)
  }

  return {
    generateAccessToken,
    generateRefreshToken,
    verifyToken,
  }
}
