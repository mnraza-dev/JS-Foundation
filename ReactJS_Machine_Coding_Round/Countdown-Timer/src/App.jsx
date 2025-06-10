import React from "react";

export default function App() {
  return (
    <div className="h-screen bg-amber-300 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4 font-bold">Countdown Timer</h1>
      <div className="flex flex-row gap-4">
        <input
          className="w-10 h-10 text-center bg-white"
          type="text"
          placeholder="HH"
        />
        <input
          className="w-10 h-10 text-center bg-white"
          type="text"
          placeholder="MM"
        />
        <input
          className="w-10 h-10 text-center bg-white"
          type="text"
          placeholder="SS"
        />
      </div>
      <button
        className=" mt-4 px-8 bg-fuchsia-800 text-white  py-2 rounded-md"
        onClick={() => {}}
      >
        Start
      </button>
    </div>
  );
}
