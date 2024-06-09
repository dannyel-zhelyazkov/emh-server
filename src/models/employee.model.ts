import { sequelize } from '@/database'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface EmployeeModel
  extends Model<
    InferAttributes<EmployeeModel>,
    InferCreationAttributes<EmployeeModel>
  > {
  employee_id: CreationOptional<string>
  first_name: string
  last_name: string
  email: string
  phone_number: string
  address: string
  hire_date: Date
  fire_date: CreationOptional<Date>
  department_id: string
}

export const Employee = sequelize.define<EmployeeModel>('employees', {
  employee_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hire_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fire_date: {
    type: DataTypes.DATE,
  },
  department_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
})
