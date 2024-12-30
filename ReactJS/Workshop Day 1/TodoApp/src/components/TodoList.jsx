import { FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleCompleted, handleDelete, handleEdit}) => {
  return (
    <div>
         <ul className="h-[500px] overflow-scroll ">
            {todos.map((item, index) => (
             <TodoItem key={index} item={item} index={index} toggleCompleted={toggleCompleted} handleDelete={handleDelete} handleEdit={handleEdit}/>
            ))}
          </ul>
    </div>
  )
}

export default TodoList