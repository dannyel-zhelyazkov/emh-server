import { sequelize } from '@/database'
import { User } from '@/models/user.model'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface AttendanceModel
  extends Model<
    InferAttributes<AttendanceModel>,
    InferCreationAttributes<AttendanceModel>
  > {
  attendance_id: CreationOptional<string>
  employee_id: string
  date: Date
  status: string
}

export const Attendance = sequelize.define<AttendanceModel>('attendances', {
  attendance_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  date: {
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
})
