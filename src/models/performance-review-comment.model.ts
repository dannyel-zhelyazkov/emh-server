import { sequelize } from '@/database'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  UUIDV4,
} from 'sequelize'

export interface PerformanceReviewComment
  extends Model<
    InferAttributes<PerformanceReviewComment>,
    InferCreationAttributes<PerformanceReviewComment>
  > {
  id: CreationOptional<string>
  comment_id: string
  review_id: string
}

export const PerformanceReviewComment =
  sequelize.define<PerformanceReviewComment>('performance_review_comments', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    comment_id: {
      type: DataTypes.UUID,
    },
    review_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  })
