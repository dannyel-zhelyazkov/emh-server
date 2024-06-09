import { AuthController } from '@/controllers/auth.controller'
import { DepartmentController } from '@/controllers/department.controller'
import { EmployeeController } from '@/controllers/employee.controller'
import { RoleController } from '@/controllers/role.controller'
import { UserController } from '@/controllers/user.controller'

export const Controllers = {
  Auth: AuthController(),
  User: UserController(),
  Role: RoleController(),
  Department: DepartmentController(),
  Employee: EmployeeController(),
}
