import { Department, Employee } from '@/models'
import { CreateEmployeeServiceData } from '@/services/@types/'
import { Op } from 'sequelize'

export const EmployeeService = () => {
  const createEmployee = async (data: CreateEmployeeServiceData) => {
    const department = await Department.findByPk(data.department_id)

    if (!department) throw new Error('Department was not found')

    return await Employee.create(data)
  }

  const getEmployees = async (data: string) => {
    return await Employee.findAll({
      where: { email: { [Op.substring]: data } },
    })
  }

  return { createEmployee, getEmployees }
}
