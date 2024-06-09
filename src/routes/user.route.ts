import { Controllers } from '@/controllers'
import express from 'express'

export const userRoute = express.Router()

userRoute.get('', Controllers.User.getUsers)
userRoute.get('/:user_id', Controllers.User.getUser)
userRoute.post('/create', Controllers.User.createUser)
userRoute.put('/update/:user_id', Controllers.User.updateUser)
