import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import TodoListItem from './TodoListItem'
import { useState, useRef } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const todosRef = useRef(null)

    const handleAddTodo = () => {
        const newTodo = todosRef.current.value;
        if (newTodo.trim() !== "") {

            setTodos([...todos, { text: newTodo, completed: false }]);
            todosRef.current.value = "";

        }
        else {
            alert("Please enter a valid task")
        }
    }

    return (
        <div className='bg-amber-200 rounded-2xl p-4 w-1/2 mx-auto mt-10'>
            <div className='flex gap-2'>
                <Input ref={todosRef} placeholder="Type here" className={"border-1 border-black"} />
                <Button onClick={handleAddTodo} className=' cursor-pointer ml-2'>Add Task </Button>
            </div>

            <TodoListItem todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoList