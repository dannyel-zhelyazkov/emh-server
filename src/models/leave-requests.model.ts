import { sequelize } from '@/database'
import { Employee } from '@/models/employee.model'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface LeaveRequestModel
  extends Model<
    InferAttributes<LeaveRequestModel>,
    InferCreationAttributes<LeaveRequestModel>
  > {
  leave_request_id: CreationOptional<string>
  start_date: Date
  end_date: Date
  status: string
  employee_id: string
}

export const LeaveRequest = sequelize.define<LeaveRequestModel>(
  'leave_requests',
  {
    leave_request_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
)
