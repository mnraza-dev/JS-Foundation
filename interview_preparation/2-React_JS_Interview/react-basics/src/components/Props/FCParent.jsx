import React from 'react'
import FCChild from './FCChild'

const FCParent = () => {
  /**
   * 
   * Props - 
   * - Props are a way to pass immutable data from a parent component to a child component.
   * - Immutable and are used to communicate between components.
   * 
   * State - 
   * - Mutable and represent the internal state of component.
   * - Managed and controlled within the state.
   * 
   * Key Differences -
   * 
   * - Props are immutable data passed down from parent component.
   * - State is mutable data managed within the component.
   * - In class components, `this.props` are used to access props and state is accessed using `this.state`.
   * - In Functional components, `props` are passed as an argument to the component and state is managed using `useState` hook.
   * 
   */

  return (
    <div><h1>FCParent</h1>
    <FCChild name="MN Raza" age="29"/>
    </div>
  )
}

export default FCParent