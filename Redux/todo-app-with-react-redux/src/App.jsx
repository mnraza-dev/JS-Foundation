import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./redux/action";

export default function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos || []);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId !== null) {
      dispatch(updateTodo({ id: editId, title: input }));
      setEditId(null);
    } else {
      dispatch(addTodo({ id: Date.now(), title: input, completed: false }));
    }

    setInput("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    if (editId === id) {
      setEditId(null);
      setInput("");
    }
  };

  const handleToggleComplete = (todo) => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleEditTodo = (todo) => {
    setInput(todo.title);
    setEditId(todo.id);
  };

  const handleCancelEdit = () => {
    setInput("");
    setEditId(null);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4 font-bold">
        Todo App with React Redux & Tailwind CSS
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="border border-green-300 rounded-md p-2"
          placeholder="Add or edit todo"
        />
        <button
          type="submit"
          className={`${
            editId ? "bg-yellow-500" : "bg-green-500"
          } text-white p-2 rounded-md`}
        >
          {editId ? "Update Todo" : "Add Todo"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="bg-gray-500 text-white p-2 rounded-md"
          >
            Cancel
          </button>
        )}
      </form>

      <ul className="w-full max-w-md space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 p-3 rounded-md"
          >
            <span className="text-white">
              {todo.completed ? <del>{todo.title}</del> : todo.title}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggleComplete(todo)}
                className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleEditTodo(todo)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
