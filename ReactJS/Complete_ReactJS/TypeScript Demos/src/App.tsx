import React from "react"
import User from "./components/User"
const App: React.FC = () => {
  return (
    <div>
      <User name="John Doe" age={30} isStudent={true} />
    </div>
  )
}

export default App