import { useEffect, useState } from "react";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { text: inputValue, completed: false }; 
      setTodos(updatedTodos);
      setEditIndex(null); 
    } else {
      setTodos([...todos, {id: Date.now(), text: inputValue, completed: false }]);
    }
    setInputValue(""); 
  };
  
  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed; 
    setTodos(updatedTodos); 
  };
  
  const handleEdit = (index) => {
    setInputValue(todos[index].text); 
    setEditIndex(index); 
  };
  

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[600px] rounded-lg drop-shadow-md text-center shadow-sm bg-emerald-800 p-4">
        <h1 className="text-white text-center p-4 text-3xl font-bold">Todo App</h1>
        <hr className="border-1 pb-6 border-white" />
        <div className="relative">
         <TodoForm handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue}/>
         <TodoList todos={todos} toggleCompleted={toggleCompleted} handleEdit={handleEdit} handleDelete={handleDelete} /> 

        </div>
      </div>
    </div>
  );
}
