import { sequelize } from '@/database'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface DepartmentModel
  extends Model<
    InferAttributes<DepartmentModel>,
    InferCreationAttributes<DepartmentModel>
  > {
  department_id: CreationOptional<string>
  department_name: string
  location: string
  employee_head_id: CreationOptional<string>
}

export const Department = sequelize.define<DepartmentModel>('departments', {
  department_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  department_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employee_head_id: {
    type: DataTypes.UUID,
  },
})
