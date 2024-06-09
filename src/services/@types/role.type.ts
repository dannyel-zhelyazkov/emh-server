export type CreateRoleServiceType = {
  role_name: string
  role_code: string
}

export type UpdateRoleServiceData = {
  role_id: string
  update: Partial<CreateRoleServiceType>
}
