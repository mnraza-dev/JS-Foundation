import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./redux/action";
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

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id) => {
    dispatch(updateTodo({ id, title: input }));
  };
  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(updateTodo(updatedTodos));
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
              <span>
                {todo.completed ? <strike>{todo.title}</strike> : todo.title}
              </span>
              <button
                onClick={() => handleCompleteTodo(todo.id)}
                className="bg-green-500 text-white px-4 py-1 rounded-md"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>

              <div className="flex py-2 gap-2">
                <button
                  onClick={handleEditTodo}
                  className="bg-blue-500 text-white px-4 py-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={handleDeleteTodo}
                  className="bg-red-500 text-white px-4 py-1 rounded-md"
                >
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
