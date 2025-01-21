import React from 'react'
import { Info } from '../types'
type UserInfoProps = {
    user: Info
}
const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    return (
        <div>
            <h1>User Information</h1>

            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default UserInfo