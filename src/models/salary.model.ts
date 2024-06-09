import { sequelize } from '@/database'
import { Employee } from '@/models/employee.model'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface SalaryModel
  extends Model<
    InferAttributes<SalaryModel>,
    InferCreationAttributes<SalaryModel>
  > {
  salary_id: CreationOptional<string>
  employee_id: string
  basic_pay: number
  allowances: number
  deductions: number
  net_salary: number
}

export const Salary = sequelize.define<SalaryModel>('salaries', {
  salary_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  basic_pay: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  allowances: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  deductions: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  net_salary: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
})
