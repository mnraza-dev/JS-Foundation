import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/todoSlice';
import { RootState, AppDispatch } from './redux/store';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '500px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#333',
          fontSize: '2.5rem',
          marginBottom: '20px',
        }}
      >
        Todo List
      </h1>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          placeholder="Add a new todo"
          style={{
            flex: 1,
            padding: '12px',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.3s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#007bff')}
          onBlur={(e) => (e.target.style.borderColor = '#ddd')}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: '12px 20px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Add
        </button>
      </div>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        {todos.length === 0 ? (
          <li
            style={{
              padding: '20px',
              textAlign: 'center',
              color: '#777',
              fontStyle: 'italic',
            }}
          >
            No todos yet. Add one to get started!
          </li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                borderBottom: '1px solid #eee',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                style={{
                  marginRight: '15px',
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                }}
              />
              <span
                style={{
                  flex: 1,
                  fontSize: '1.1rem',
                  color: todo.completed ? '#888' : '#333',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  transition: 'color 0.3s',
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#ff4d4f',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc0000')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff4d4f')}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;