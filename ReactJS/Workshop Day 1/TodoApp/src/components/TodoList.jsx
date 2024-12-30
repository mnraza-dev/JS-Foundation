import { FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'

const TodoList = ({todos, toggleCompleted, handleDelete, handleEdit}) => {
  return (
    <div>
         <ul className="h-[500px] overflow-scroll ">
            {todos.map((item, index) => (
              <li key={index} className="list-none font-semibold flex items-center p-4 text-white">
                <div className="w-full flex justify-between">
                  <div className={`font-semibold text-xl ${item.completed ? 'line-through font-semibold text-red-400' : ''}`}>
                    {item.text}
                  </div>
                  <div>
                    <button
                      onClick={() => toggleCompleted(index)} // Toggle completion on button click
                      className={`drop-shadow-md font-bold rounded-full py-2 px-4 ${item.completed ? 'bg-green-500' : 'bg-emerald-500'} cursor-pointer ml-4 text-white`}
                    >
                      {item.completed ? "Undo" : "Mark as Complete"}
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className="drop-shadow-md box-shadow-md font-bold rounded-full p-2 bg-blue-500 cursor-pointer ml-4 text-gary-200"
                    >
                      <FilePenLine />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="drop-shadow-md box-shadow-md font-bold rounded-full p-2 bg-red-500 cursor-pointer ml-4 text-gray-200"
                    >
                    <Trash2 />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default TodoList