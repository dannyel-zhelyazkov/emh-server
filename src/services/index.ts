import { AuthService } from '@/services/auth.service'
import { DepartmentService } from '@/services/department.service'
import { EmployeeService } from '@/services/employee.service'
import { RoleService } from '@/services/role.service'
import { UserService } from '@/services/user.service'

export const Services = {
  Auth: AuthService(),
  Role: RoleService(),
  User: UserService(),
  Department: DepartmentService(),
  Employee: EmployeeService(),
}
