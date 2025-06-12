import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import TodoItem from "./components/TodoItem";
import axios from "axios";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([]);
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

  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div className="p-8 ">
      <div className="flex justify-center">
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
      <div className="flex mt-4 flex-wrap gap-4 ">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}
