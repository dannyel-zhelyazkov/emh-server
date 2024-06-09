export type CreateUserServiceData = {
  email: string
  password: string
  role_id: string
}

export type FindUserServiceData = {
  email: string
  password: string
}

export type UpdateUserServiceData = {
  user_id: string
  update: Partial<CreateUserServiceData>
}
