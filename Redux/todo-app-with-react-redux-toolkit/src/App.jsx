import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "./features/todos/todoSlice";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId) {
      dispatch(updateTodo({ id: editId, title: input }));
      setEditId(null);
    } else {
      dispatch(
        addTodo({
          id: Date.now(),
          title: input,
          completed: false,
        })
      );
    }

    setInput("");
  };

  const handleEditTodo = (todo) => {
    setInput(todo.title);
    setEditId(todo.id);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    if (editId === id) {
      setEditId(null);
      setInput("");
    }
  };

  const handleCompleteTodo = (todo) => {
    dispatch(
      updateTodo({
        ...todo,
        completed: !todo.completed,
      })
    );
  };

  const filteredTodos = todos.filter((todo) => todo.title);

  return (
    <div className="container mx-auto flex flex-col gap-4 max-w-md min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 w-full flex gap-1 rounded-lg shadow-md"
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
          className={`${
            editId
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          } text-white p-2 rounded-md`}
        >
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <div className="bg-white p-4 rounded-lg shadow-md w-full">
        <ul className="flex flex-col gap-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`${
                todo.completed ? "line-through text-gray-400" : ""
              } flex items-center justify-between`}
            >
              <span>{todo.title}</span>
              <div className="flex gap-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white p-1 px-2 rounded-md text-sm"
                  onClick={() => handleCompleteTodo(todo)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white p-1 px-2 rounded-md text-sm"
                  onClick={() => handleEditTodo(todo)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white p-1 px-2 rounded-md text-sm"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
