import { sequelize } from '@/database'
import { PerformanceReview } from '@/models/performance-review.model'
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'

export interface CommentModel
  extends Model<
    InferAttributes<CommentModel>,
    InferCreationAttributes<CommentModel>
  > {
  comment_id: CreationOptional<string>
  comment_date: Date
}

export const Comment = sequelize.define<CommentModel>('comments', {
  comment_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  comment_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
})
