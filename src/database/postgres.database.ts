import { sequelize } from '@/database'
import {
  Attendance,
  Comment,
  Department,
  Employee,
  LeaveRequest,
  PerformanceReview,
  Role,
  Salary,
  User,
  PerformanceReviewComment,
  DepartmentEmployee,
} from '@/models'
import dotenv from 'dotenv'

//For env File
dotenv.config()

const tableRelationships = () => {
  User.belongsTo(Role, { foreignKey: 'role_id' })
  Role.hasMany(User, { foreignKey: 'role_id' })
  Employee.belongsToMany(Department, {
    through: DepartmentEmployee,
    foreignKey: 'employee_id',
    as: 'departments',
  })
  Department.belongsToMany(Employee, {
    through: DepartmentEmployee,
    foreignKey: 'department_id',
    as: 'employees',
  })

  Department.belongsTo(Employee, { foreignKey: 'employee_head_id', as: 'head' })
  Employee.hasMany(Department, {
    foreignKey: 'employee_head_id',
    as: 'head_of',
  })

  Employee.hasMany(Salary, {
    foreignKey: 'employee_id',
  })
  Employee.hasMany(LeaveRequest, { foreignKey: 'employee_id' })
  Employee.hasOne(PerformanceReview, {
    foreignKey: 'employee_id',
  })
  Salary.belongsTo(Employee, {
    foreignKey: 'employee_id',
  })
  LeaveRequest.belongsTo(Employee, { foreignKey: 'employee_id' })
  Attendance.belongsTo(User, {
    foreignKey: 'employee_id',
  })
  PerformanceReview.belongsTo(Employee, { foreignKey: 'employee_id' })
  PerformanceReview.belongsToMany(Comment, {
    through: PerformanceReviewComment,
  })
  Comment.belongsToMany(PerformanceReview, {
    through: PerformanceReviewComment,
  })
}

export const defineDatabase = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    tableRelationships()
    console.log('Database connected!')
  } catch (e) {
    console.error('Unable to connect to the database: ', e)
  }
}
