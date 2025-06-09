import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [input, setInput] = useState("");
  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  const filteredTodos = todos.filter((todo) => todo.title);
  return (
    <div className="container mx-auto flex flex-col gap-4  max-w-md min-h-screen items-center justify-center">
      <form
        onSubmit={handleAddTodo}
        className="bg-white p-4  w-full flex  gap-1 rounded-lg shadow-md"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add a new todo"
          className="w-full p-2 rounded-md border border-gray-300"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 cursor-pointer flex items-center justify-center text-white p-2 rounded-md"
        >
          Add
        </button>
      </form>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
