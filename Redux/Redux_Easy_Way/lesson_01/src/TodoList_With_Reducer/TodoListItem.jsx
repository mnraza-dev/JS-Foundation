import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { useState } from 'react'

const TodoListItem = ({ todos, setTodos }) => {
    const [isCompleted, setIsCompleted] = useState(false)
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    const handleTodoToggle = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    }
    return (
        <>
            <div>
                <ul className='list-disc mt-4 ml-6'>
                    {todos.map((todo, index) => (<li key={index} className='flex justify-between items-center'>
                        <p className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-black'}`}>
                            {todo.text}
                        </p>
                        <div className='flex gap-2 mt-2'>
                            <Button onClick={() => { handleDeleteTodo(index) }} variant={"destructive"} className='p-2 cursor-pointer'>
                                <Trash color='#fff' className='h-4 w-4' />
                            </Button>
                            <Button onClick={() => { handleTodoToggle(index) }} className="bg-green-600 text-white hover:bg-green-700 hover:text-amber-100 cursor-pointer" variant={"outline"}>
                                {
                                    todo.completed ? "Undo" : "Mark as Done"
                                }
                            </Button>

                        </div>
                    </li>))}
                </ul>
            </div>
        </>
    )
}

export default TodoListItem