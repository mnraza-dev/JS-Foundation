import React from 'react'

const TodoForm = ({inputValue, setInputValue, handleSubmit, editIndex}) => {
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="
                p-4 
                w-[400px] 
                h-[60px] rounded-lg 
                outline-none border-2 
                border-emerald-500 
                placeholder:text-lg placeholder:font-semibold placeholder:text-gray-400"
              placeholder="Enter a Todo Item"
            />
            <button
              type="submit"
              className="h-[60px] absolute right-0 transform -translate-x-1/2 p-4 bg-emerald-500 rounded-lg text-white font-bold rounded-l-none"
            >
              {editIndex !== null ? "Edit Todo" : "Add Todo"}
            </button>
          </form>
    </div>
  )
}

export default TodoForm