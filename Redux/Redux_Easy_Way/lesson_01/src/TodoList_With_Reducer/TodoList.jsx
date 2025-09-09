import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import TodoListItem from './TodoListItem'
import { useRef, useReducer } from 'react'
const initialState = {
    todos: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'DELETE_TODO':
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);
            return { ...state, todos: newTodos };
        case 'TOGGLE_TODO':
            const toggledTodos = state.todos.map((todo, index) =>
                index === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
            return { ...state, todos: toggledTodos };
        default:
            return state;
    }
}
const TodoList_Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const todosRef = useRef(null)

    const handleAddTodo = () => {
        const newTodo = todosRef.current.value;
        dispatch({ type: 'ADD_TODO', payload: { text: newTodo, completed: false } });
        todosRef.current.value = "";
    }

    return (
        <div className='bg-amber-200 rounded-2xl p-4 w-1/2 mx-auto mt-10'>
            <div className='flex gap-2'>
                <Input ref={todosRef} placeholder="Type here" className={"border-1 border-black"} />
                <Button onClick={handleAddTodo} className=' cursor-pointer ml-2'>Add Task </Button>
            </div>

            <TodoListItem todos={state} setTodos={dispatch} />
        </div>
    )
}

export default TodoList_Reducer