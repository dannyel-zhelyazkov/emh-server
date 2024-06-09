import { Role, User } from '@/models'
import { Services } from '@/services'
import { Request, Response } from 'express'
import { Error } from 'sequelize'

export const UserController = () => {
  const getUser = async (req: Request, res: Response) => {
    try {
      const user = await User.findByPk(req.params.user_id)

      if (!user) res.status(404).send({ error: 'User was not found' })

      res.status(200).send(user)
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const getUsers = async (req: Request, res: Response) => {
    const { skip, take } = req.query

    const offset = Number(skip)
    const limit = take ? Number(take) : 5

    const totalCount = await User.count() // Get the total count of records
    const totalPages = Math.ceil(totalCount / limit)

    try {
      const users = await User.findAll({
        ...(!!(offset || limit) && { offset, limit }),
        attributes: ['user_id', 'email', ['updatedAt', 'modified_at']],
        include: Role,
      })

      res.status(200).send({ users, totalPages })
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const createUser = async (req: Request, res: Response) => {
    try {
      await Services.User.createUser(req.body)

      res.status(201).send('User was added successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const updateUser = async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params
      await Services.User.updateUser({ user_id, update: req.body })

      res.status(201).send('User was updated successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  return {
    getUser,
    getUsers,
    updateUser,
    createUser,
  }
}
