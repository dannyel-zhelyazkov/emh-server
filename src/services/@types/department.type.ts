export type CreateDepartmentServiceType = {
  department_name: string
  location: string
}

export type UpdateDepartmentServiceData = {
  department_id: string
  update: Partial<CreateDepartmentServiceType>
}
