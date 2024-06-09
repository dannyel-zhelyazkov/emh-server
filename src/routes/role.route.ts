import { Controllers } from '@/controllers'
import express from 'express'

export const roleRoute = express.Router()

roleRoute.get('', Controllers.Role.getRoles)
roleRoute.get('/:role_id', Controllers.Role.getRole)
roleRoute.post('/create', Controllers.Role.createRole)
roleRoute.put('/update/:role_id', Controllers.Role.updateRole)
roleRoute.delete('/delete/:role_id', Controllers.Role.deleteRole)
