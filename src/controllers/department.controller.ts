import { Department } from '@/models'
import { Services } from '@/services'
import { Request, Response } from 'express'
import { Error } from 'sequelize'

export const DepartmentController = () => {
  const getDepartment = async (req: Request, res: Response) => {
    try {
      const department = await Department.findByPk(req.params.department_id)

      if (!department)
        res.status(404).send({ error: 'Department was not found' })

      res.status(200).send(department)
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const getDepartments = async (req: Request, res: Response) => {
    try {
      const departments = await Department.findAll()

      res.status(200).send(departments)
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const createDepartment = async (req: Request, res: Response) => {
    try {
      await Services.Department.createDepartment(req.body)

      res.status(201).send('Department was created successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const updateDepartment = async (req: Request, res: Response) => {
    try {
      const { department_id } = req.params
      await Services.Department.updateDepartment({
        department_id,
        update: req.body,
      })

      res.status(201).send('Department was updated successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  const deleteDepartment = async (req: Request, res: Response) => {
    try {
      const { departments } = req.query
      const departments_ids = (departments as string).split(',')

      await Services.Department.deleteDepartment(departments_ids)

      res.status(201).send('Role was deleted successfully')
    } catch (e) {
      console.log(e)
      res.status(500).send({ error: (e as Error).message })
    }
  }

  return {
    getDepartment,
    getDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment,
  }
}
