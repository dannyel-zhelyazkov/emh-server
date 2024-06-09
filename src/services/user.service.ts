import { Role, User, UserModel } from '@/models'
import { passwordValidator, wrongPasswordMsg } from '@/models/validations'
import {
  CreateUserServiceData,
  FindUserServiceData,
  UpdateUserServiceData,
} from '@/services/@types'
import bcrypt from 'bcrypt'

export const UserService = () => {
  const authenticateUser = async (
    data: FindUserServiceData,
  ): Promise<UserModel> => {
    const { email, password } = data

    const user = await User.findOne({
      where: { email },
      include: Role,
    })

    if (!user) throw new Error('Incorrect email or password')

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) throw new Error('Incorrect email or password')

    return user
  }

  const createUser = async (
    data: CreateUserServiceData,
  ): Promise<UserModel> => {
    const role = await Role.findOne({ where: { role_id: data.role_id } })

    if (!passwordValidator.test(data.password))
      throw new Error(wrongPasswordMsg)

    if (!role) throw new Error('Role was not found')

    const hashedPassword = await bcrypt.hash(data.password, 10)

    return await User.create({
      email: data.email,
      password: hashedPassword,
      active: ['admin', 'super_admin'].includes(role.role_code),
      role_id: role.role_id,
    })
  }

  const updateUser = async (
    data: UpdateUserServiceData,
  ): Promise<UserModel> => {
    const user = await User.findOne({
      where: { user_id: data.user_id },
      include: Role,
    })

    if (!user) throw new Error('User was not found')

    user.set(data.update)

    return await user.save()
  }

  return {
    authenticateUser,
    createUser,
    updateUser,
  }
}
