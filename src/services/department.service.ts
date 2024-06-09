import {
  CreateDepartmentServiceType,
  UpdateDepartmentServiceData,
} from '@/services/@types'
import { Department, DepartmentModel, Employee } from '@/models'
import { Op } from 'sequelize'

export const DepartmentService = () => {
  const createDepartment = async (data: CreateDepartmentServiceType) => {
    return await Department.create({
      department_name: data.department_name,
      location: data.location,
    })
  }

  const updateDepartment = async (
    data: UpdateDepartmentServiceData,
  ): Promise<DepartmentModel> => {
    const department = await Department.findByPk(data.department_id)

    if (!department) throw new Error('Department was not found')

    department.set(data.update)

    return await department.save()
  }

  const deleteDepartment = async (
    department_ids: string[],
  ): Promise<boolean> => {
    const departments = await Department.findAll({
      where: {
        department_id: {
          [Op.in]: department_ids,
        },
      },
    })

    if (!departments.length) throw new Error('No departments were found')

    const employees = await Employee.findAll({
      where: {
        department_id: {
          [Op.in]: department_ids,
        },
      },
    })

    if (employees.length > 0)
      throw new Error('There are employees assigned to that departments')

    for (const department of departments) {
      await department.destroy()
    }

    return true
  }

  return {
    createDepartment,
    updateDepartment,
    deleteDepartment,
  }
}
