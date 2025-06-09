import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/action";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const filteredTodos = todos.filter((todo) => todo.title);

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: todos.length + 1, title: input }));
    setInput("");
  };

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4 font-bold">
          Todo App with React Redux & Tailwind CSS
        </h1>
        <form onSubmit={handleAddTodo} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="border border-green-300 rounded-md p-2"
            placeholder="Add a todo"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md"
          >
            Add Todo
          </button>
        </form>
        <ul className="list-inside">
          {filteredTodos.map((todo) => (
            <li
              className="flex justify-between items-center gap-1"
              key={todo.id}
            >
              <span className="text-lg font-bold">{todo.title}</span>
              <div className="flex py-2 gap-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded-md">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
