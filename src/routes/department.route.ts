import { Controllers } from '@/controllers'
import express from 'express'

export const departmentRoute = express.Router()

departmentRoute.get('', Controllers.Department.getDepartments)
departmentRoute.get('/:department_id', Controllers.Department.getDepartment)
departmentRoute.post('/create', Controllers.Department.createDepartment)
departmentRoute.put(
  '/update/:department_id',
  Controllers.Department.updateDepartment,
)
departmentRoute.delete('/delete', Controllers.Department.deleteDepartment)
