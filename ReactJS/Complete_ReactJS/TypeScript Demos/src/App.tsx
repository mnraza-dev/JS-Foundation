import React from "react"
import User from "./components/User"
import Button from "./components/Button"

const App: React.FC = () => {
  return (
    <div>
      <User name="John Doe" age={30} isStudent={true} />

      <Button label="Click me" onClick={() => console.log("Button clicked")} disabled={true} />
    </div>
  )
}

export default App