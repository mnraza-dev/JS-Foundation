import React from 'react'
import { AdminInfoList } from '../types'
type AdminInfoProps = {
  admin: AdminInfoList
}
const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div><h1>Admin Information</h1>
      <p>Name: {admin.name}</p>
      <p>Email : {admin.email}</p>
      <p>Role: {admin.role}</p>
      <p>Last Login: {admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo