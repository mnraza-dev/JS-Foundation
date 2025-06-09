import React from "react";

export default function App() {
  return (
    <>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4 font-bold">
          Todo App with React Redux & Tailwind CSS
        </h1>
        <input
          type="text"
          className="border border-green-300 rounded-md p-2"
          placeholder="Add a todo"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Add Todo
        </button>
        <ul className="list-disc list-inside">
          <li>{}</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
        </ul>
      </div>
    </>
  );
}
