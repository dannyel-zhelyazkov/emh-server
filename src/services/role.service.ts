import {
  CreateRoleServiceType,
  UpdateRoleServiceData,
} from '@/services/@types/role.type'
import { Role, RoleModel, User } from '@/models'

export const RoleService = () => {
  const createRole = async (
    data: CreateRoleServiceType,
  ): Promise<RoleModel | undefined> => {
    return await Role.create({
      role_name: data.role_name,
      role_code: data.role_code,
    })
  }

  const updateRole = async (
    data: UpdateRoleServiceData,
  ): Promise<RoleModel> => {
    const role = await Role.findOne({
      where: { role_id: data.role_id },
    })

    if (!role) throw new Error('Role was not found')

    role.set(data.update)

    return await role.save()
  }

  const deleteRole = async (role_id: string): Promise<boolean> => {
    const role = await Role.findOne({
      where: { role_id: role_id },
    })

    if (!role) throw new Error('Role was not found')

    const users = await User.findAndCountAll({
      where: { role_id: role.role_id },
    })

    if (users.count > 0)
      throw new Error('There are users assigned to that role')

    await role.destroy()

    return true
  }

  return { createRole, updateRole, deleteRole }
}
