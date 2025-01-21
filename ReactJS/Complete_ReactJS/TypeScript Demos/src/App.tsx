import React from "react"
import User from "./components/User"
import Button from "./components/Button"
import UserInfo from "./components/UserInfo"
import AdminInfo from "./components/AdminInfo"
import { AdminInfoList, Info } from "./types"

const App: React.FC = () => {

  const user : Info = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  }
  const admin : AdminInfoList = {
    id: 2,
    name: "Admin Doe",
    email: "admin.doe@example.com",
    role: "admin",
    lastLogin: new Date()
  }
  return (
    <div>
      <User name="John Doe" age={30} isStudent={true} />

      <Button label="Click me" onClick={() => console.log("Button clicked")} disabled={true} />

      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  )
}

export default App