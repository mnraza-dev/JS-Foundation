import { useState } from "react"

export default function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const value = e.target.todo.value;
    setTodo([...todo, value]);
    e.target.todo.value = "";
  }

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-[600px] rounded-lg drop-shadow-md text-center shadow-sm bg-emerald-800 p-4">
        <h1 className=" text-white text-center p-4 text-3xl font-bold">
          Todo App
        </h1>
        <hr className="border-1 pb-6 border-white" />
        <div className="relative">

          <form onSubmit={addTodo}>
            <input
              type="text"
              name="todo"
              className="
          p-4 
          w-[400px] 
          h-[60px] rounded-lg 
          outline-none border-2 
          border-emerald-500 
          placeholder:text-lg placeholder:font-semibold placeholder:text-gray-400" placeholder="Enter a Todo Item"
            />
            <button
              className="h-[60px] absolute right-0 transform -translate-x-1/2 p-4 bg-emerald-500 rounded-lg text-white font-bold rounded-l-none"
            >
              Add Todo
            </button>
          </form>
          <ul>
            {
              todo.map((item, index) => <li className="list-none p-4 text-white font-semibold ">
                {item}
                <button className="drop-shadow-md  box-shadow-md rounded-full  p-2 bg-slate-50 cursor-pointer ml-4 text-blue-400">Edit</button>
                <button className="drop-shadow-md  box-shadow-md rounded-full  p-2 bg-slate-50 cursor-pointer ml-4 text-blue-400">Delete</button>
              </li>)
            }

          </ul>

        </div>
      </div>

    </div>
  )
}