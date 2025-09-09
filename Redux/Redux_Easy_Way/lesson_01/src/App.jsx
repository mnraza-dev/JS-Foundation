import CounterObj from './CounterObject/CounterObj'
import CounterReducer from './CounterReducer/CounterReducer'
import Counter from './CounterState/Counter'
import TodoListReducer from './TodoList_With_Reducer/TodoList'

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <CounterReducer/> */}
      {/* <CounterObj/> */}

      <TodoListReducer/>
    </div>
  )
}

export default App