import React from 'react'

type UserProps = {
    name: string
    age: number
    isStudent: boolean
}
const User: React.FC<UserProps> = ({name, age, isStudent}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>   
            <p>Is student: {isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default User