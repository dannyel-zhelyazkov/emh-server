'use strict'
const bcrypt = require('bcrypt')
const uuid = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('dani123', 10)

    const superAdminId = uuid.v4()
    const adminRoleId = uuid.v4()
    const employeeRoleId = uuid.v4()
    const managerRoleId = uuid.v4()
    const hrRoleId = uuid.v4()

    await queryInterface.bulkInsert('roles', [
      {
        role_id: superAdminId,
        role_code: 'super_admin',
        role_name: 'Super Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: adminRoleId,
        role_code: 'admin',
        role_name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: hrRoleId,
        role_code: 'hr',
        role_name: 'HR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: employeeRoleId,
        role_code: 'employee',
        role_name: 'Employee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: managerRoleId,
        role_code: 'manager',
        role_name: 'Manager',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])

    return queryInterface.bulkInsert('users', [
      {
        user_id: uuid.v4(),
        email: 'dani@emh.com',
        password: hashedPassword,
        role_id: superAdminId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'admin@emh.com',
        password: hashedPassword,
        role_id: adminRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'manager_1@emh.com',
        password: hashedPassword,
        role_id: managerRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'manager_2@emh.com',
        password: hashedPassword,
        role_id: managerRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'manager_3@emh.com',
        password: hashedPassword,
        role_id: managerRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'hr_1@emh.com',
        password: hashedPassword,
        role_id: hrRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'hr_2@emh.com',
        password: hashedPassword,
        role_id: hrRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'hr_3@emh.com',
        password: hashedPassword,
        role_id: hrRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'employee_1@emh.com',
        password: hashedPassword,
        role_id: employeeRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'employee_2@emh.com',
        password: hashedPassword,
        role_id: employeeRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: uuid.v4(),
        email: 'employee_3@emh.com',
        password: hashedPassword,
        role_id: employeeRoleId,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {})
  },
}
