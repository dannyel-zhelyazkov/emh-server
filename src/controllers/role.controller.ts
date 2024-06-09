import { Role, User } from '@/models'
import { Services } from '@/services'
import { Request, Response } from 'express'
import { Error } from 'sequelize'

export const RoleController = () => {
  const getRole = async (req: Request, res: Response) => {
    try {
      const role = await Role.findByPk(req.params.role_id)

      if (!role) res.status(404).send({ error: 'Role was not found' })

      res.status(200).send(role)
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const getRoles = async (req: Request, res: Response) => {
    const { skip, take } = req.query

    const offset = Number(skip)
    const limit = take ? Number(take) : 5

    const totalCount = await Role.count() // Get the total count of records
    const totalPages = Math.ceil(totalCount / limit)

    try {
      const roles = await Role.findAll({
        ...(!!(offset && limit) && { offset, limit }),
        attributes: [
          'role_id',
          'role_name',
          'role_code',
          ['updatedAt', 'modified_at'],
        ],
      })

      res.status(200).send({ roles, totalPages })
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const createRole = async (req: Request, res: Response) => {
    try {
      await Services.Role.createRole(req.body)

      res.status(201).send('Role was created successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const updateRole = async (req: Request, res: Response) => {
    try {
      const { role_id } = req.params
      await Services.Role.updateRole({ role_id, update: req.body })

      res.status(201).send('Role was updated successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const deleteRole = async (req: Request, res: Response) => {
    try {
      await Services.Role.deleteRole(req.params.role_id)

      res.status(201).send('Role was deleted successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  return { getRole, getRoles, createRole, updateRole, deleteRole }
}
