import { FilePenLine, FilePenLineIcon, Trash2 } from 'lucide-react';
import { useEffect, useState } from "react";

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
      // Edit the existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { text: inputValue, completed: false }; // Initialize as not completed
      setTodos(updatedTodos);
      setEditIndex(null); // Reset edit index
    } else {
      // Add new todo as an object with text and completed properties
      setTodos([...todos, { text: inputValue, completed: false }]); // Add new todo
    }
  
    setInputValue(""); // Clear input field
  };
  
  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed; // Toggle the 'completed' property
    setTodos(updatedTodos); // Update the todos state
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="
                p-4 
                w-[400px] 
                h-[60px] rounded-lg 
                outline-none border-2 
                border-emerald-500 
                placeholder:text-lg placeholder:font-semibold placeholder:text-gray-400"
              placeholder="Enter a Todo Item"
            />
            <button
              type="submit"
              className="h-[60px] absolute right-0 transform -translate-x-1/2 p-4 bg-emerald-500 rounded-lg text-white font-bold rounded-l-none"
            >
              {editIndex !== null ? "Edit Todo" : "Add Todo"}
            </button>
          </form>
          <ul className="h-[500px] overflow-scroll ">
            {todos.map((item, index) => (
              <li key={index} className="list-none font-semibold flex items-center p-4 text-white">
                <div className="w-full flex justify-between">
                  <div className={`font-semibold text-xl ${item.completed ? 'line-through font-semibold text-red-400' : ''}`}>
                    {item.text}
                  </div>
                  <div>
                    <button
                      onClick={() => toggleCompleted(index)} // Toggle completion on button click
                      className={`drop-shadow-md font-bold rounded-full py-2 px-4 ${item.completed ? 'bg-green-500' : 'bg-emerald-500'} cursor-pointer ml-4 text-white`}
                    >
                      {item.completed ? "Undo" : "Mark as Complete"}
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className="drop-shadow-md box-shadow-md font-bold rounded-full p-2 bg-blue-500 cursor-pointer ml-4 text-gary-200"
                    >
                      <FilePenLine />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="drop-shadow-md box-shadow-md font-bold rounded-full p-2 bg-red-500 cursor-pointer ml-4 text-gray-200"
                    >
                    <Trash2 />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}
