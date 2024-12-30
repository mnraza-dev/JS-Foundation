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
      // Edit existing todo
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { text: inputValue, completed: false }; // Reset to incomplete
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      // Add new todo
      setTodos([...todos, { text: inputValue, completed: false }]); // New todo is incomplete
    }

    setInputValue("");
  };
  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };


  const handleEdit = (index) => {
    setInputValue(todos[index]);
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
          <ul>
            {todos.map((item, index) => (
              <li key={index} className="list-none font-semibold flex items-center p-4 text-white">
                <div className="w-full flex justify-between">
                  <div className={`font-semibold text-xl ${item.completed ? 'line-through font-semibold text-red-400' : ''}`}>
                    {item.text}
                  </div>
                  <div>
                    <button
                      onClick={() => toggleCompleted(index)} // Toggle completion on button click
                      className={`drop-shadow-md font-bold rounded-full p-2 ${item.completed ? 'bg-green-500' : 'bg-emerald-500'} cursor-pointer ml-4 text-white`}
                    >
                      {item.completed ? "Undo" : "Complete"}
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className="drop-shadow-md box-shadow-md font-bold rounded-full p-2 bg-slate-50 cursor-pointer ml-4 text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="drop-shadow-md box-shadow-md font-bold rounded-full p-2 bg-red-500 cursor-pointer ml-4 text-gray-200"
                    >
                      Delete
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
