export default function App() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-[600px] rounded-lg drop-shadow-md text-center shadow-sm bg-emerald-800 p-4">
        <h1 className=" text-white text-center p-4 text-3xl font-bold">
          Todo App
        </h1>
        <hr className="border-1 pb-6 border-white" />
        <div className="relative">
          <input
            type="text"
            name="todo"
            className="
          p-4 
          w-[400px] 
          h-[60px] rounded-lg 
          outline-none border-2 
          border-emerald-500 
          placeholder:text-lg placeholder:font-semibold placeholder:text-gray-400" placeholder="Enter a Todo Item"
          />
          <button
            className=" h-[60px] absolute right-0 transform -translate-x-1/2  p-4 bg-emerald-500 rounded-lg text-white font-bold">
            Add Todo
          </button>
        </div>
      </div>

    </div>
  )
}