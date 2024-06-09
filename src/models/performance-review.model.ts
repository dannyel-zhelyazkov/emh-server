import { sequelize } from '@/database'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface PerformanceReviewModel
  extends Model<
    InferAttributes<PerformanceReviewModel>,
    InferCreationAttributes<PerformanceReviewModel>
  > {
  review_id: CreationOptional<string>
  employee_id: string
  review_date: Date
  performance_rating: number
  net_salary: number
}

export const PerformanceReview = sequelize.define<PerformanceReviewModel>(
  'performance_reviews',
  {
    review_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    performance_rating: {
      type: DataTypes.SMALLINT,
    },
    net_salary: {
      type: DataTypes.SMALLINT,
    },
    employee_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
)
