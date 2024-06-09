import { sequelize } from '@/database'
import { RoleModel } from '@/models'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  user_id: CreationOptional<string>
  email: string
  password: string
  role_id: string
  active: boolean
  role?: RoleModel
}

export const User = sequelize.define<UserModel>('users', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
})
