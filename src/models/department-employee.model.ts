import { sequelize } from '@/database'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  UUIDV4,
} from 'sequelize'

export interface DepartmentEmployeeModel
  extends Model<
    InferAttributes<DepartmentEmployeeModel>,
    InferCreationAttributes<DepartmentEmployeeModel>
  > {
  id: CreationOptional<string>
  department_id: string
  employee_id: string
}

export const DepartmentEmployee = sequelize.define<DepartmentEmployeeModel>(
  'department_employee',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    department_id: {
      type: DataTypes.UUID,
    },
    employee_id: {
      type: DataTypes.UUID,
    },
  },
)
