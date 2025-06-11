import React, { useState } from "react";
export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    setIsStarted(true);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "hours") {
      setHours(value);
    }
    if (name === "minutes") {
      setMinutes(value);
    }
    if (name === "seconds") {
      setSeconds(value);
    }
  };

  return (
    <div className="h-screen bg-amber-300 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-4 font-bold">Countdown Timer</h1>
      <div className="flex flex-row gap-4">
        <input
          onChange={(e) => handleInput(e)}
          className="w-10 h-10 text-center bg-white"
          type="text"
          placeholder="HH"
          name="hours"
        />
        <input
          onChange={(e) => handleInput(e)}
          className="w-10 h-10 text-center bg-white"
          type="text"
          placeholder="MM"
          name="minutes"
        />
        <input
          onChange={(e) => handleInput(e)}
          className="w-10 h-10 text-center bg-white"
          type="text"
          placeholder="SS"
          name="seconds"
        />
      </div>
      <button
        className=" mt-4 px-8 bg-fuchsia-800 text-white  py-2 rounded-md"
        onClick={() => handleStart()}
      >
        Start
      </button>
      <div className="pt-4">
        <div className="flex gap-4">
          <div className="flex gap-4 items-center">
            <p className="text-8xl">10</p>
            <span className="text-7xl">:</span>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-8xl">11</p>
            <span className="text-7xl">:</span>
          </div>
          <div className="flex items-center">
            <p className="text-8xl">12</p>
          </div>
        </div>
        <div className="flex justify-center pt-4 flex-row gap-4">
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
