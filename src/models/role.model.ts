import { sequelize } from '@/database'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface RoleModel
  extends Model<
    InferAttributes<RoleModel>,
    InferCreationAttributes<RoleModel>
  > {
  role_id: CreationOptional<string>
  role_name: string
  role_code: string
}

export const Role = sequelize.define<RoleModel>('roles', {
  role_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  role_name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  role_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
})
