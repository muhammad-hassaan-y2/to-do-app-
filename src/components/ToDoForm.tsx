'use client'
import React, {useState} from 'react'


interface TodoFormProps {
    addTodo: (todo: string) => void;
  }
  
  export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (value) {
        addTodo(value);
        setValue('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="What is the task today?"
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    );
  };