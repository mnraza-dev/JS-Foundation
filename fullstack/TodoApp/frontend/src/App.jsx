import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import TodoItem from "./components/TodoItem";
import axios from "axios";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const getAllTodos = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/todo/get");
    setTodos(res.data.data);
  };
  const handleAddTodo = async (todoData) => {
    const res = await axios.post(
      import.meta.env.VITE_API_URL + "/todo/add",
      todoData
    );
    todoData.title = "";
    todoData.description = "";
    getAllTodos();
  };
  const deleteTodo = async (id) => {
    const res = await axios.delete(
      import.meta.env.VITE_API_URL + "/todo/delete/" + id
    );
    getAllTodos();
  };
  const updateTodo = async (todoData) => {
    if (!editingTodo) return;
    const res = await axios.put(
      import.meta.env.VITE_API_URL + "/todo/update/" + editingTodo._id,
      todoData
    );
    setEditingTodo(null);
    getAllTodos();
  };
  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  
  return (
    <div className="p-8 bg-gradient-to-r from-indigo-200 to-fuchsia-300">
      <div className="flex justify-center">
        <AddTodo 
          handleAddTodo={handleAddTodo} 
          handleUpdateTodo={updateTodo}
          editingTodo={editingTodo}
          setEditingTodo={setEditingTodo}
        />
      </div>
      <div className="flex justify-center mt-4 flex-wrap gap-4 ">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
