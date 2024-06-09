export const passwordValidator =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/

export const wrongPasswordMsg =
  'Minimum eight characters/At least one uppercase letter/One lowercase letter/One number and one special character'
