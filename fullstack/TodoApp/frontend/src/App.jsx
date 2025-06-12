import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import TodoItem from "./components/TodoItem";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);
  const getAllTodos = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/todo/get");
    setTodos(res.data.data);
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div className="p-8 ">
      <div className="flex flex-wrap ">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
