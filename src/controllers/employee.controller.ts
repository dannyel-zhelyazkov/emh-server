import { Services } from '@/services'
import { Request, Response } from 'express'
import { Error } from 'sequelize'

export const EmployeeController = () => {
  const getEmployees = async (req: Request, res: Response) => {
    try {
      const { search } = req.query
      const employees = await Services.Employee.getEmployees(search as string)

      res.status(201).send(employees)
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }
  const createEmployee = async (req: Request, res: Response) => {
    try {
      await Services.Employee.createEmployee(req.body)

      res.status(201).send('Employee was added successfully')
    } catch (e) {
      res.status(500).send({ error: (e as Error).message })
    }
  }

  return {
    createEmployee,
    getEmployees,
  }
}
