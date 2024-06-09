import { Controllers } from '@/controllers'
import express, { Request, Response } from 'express'

export const employeeRoute = express.Router()

employeeRoute.get('/', Controllers.Employee.getEmployees)

employeeRoute.post('/', Controllers.Employee.createEmployee)

employeeRoute.put('/:id', (req: Request, res: Response) => {})

employeeRoute.delete('/:id', (req: Request, res: Response) => {})
