import React, { useState } from "react";

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  // const [hours, setHours] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    setIsStarted(true);
  };

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
        onClick={() => handleStart()}
      >
        Start
      </button>

      <div>
        <div className="flex flex-row gap-4">
          <p>Hours</p>
          <span>:</span>
          <p>Minutes</p>
          <span>:</span>
          <p>Seconds</p>
        </div>
        <div className="flex flex-row gap-4">
          <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-md">
            Pause
          </button>
          <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
