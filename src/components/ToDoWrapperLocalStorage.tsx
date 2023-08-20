'use client'
import React, {useState, useEffect} from 'react'
import { TodoForm } from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './ToDo';
import { EditTodoForm } from './EditToDoForm';
uuidv4();

  
  export const TodoWrapperLocalStorage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
      setTodos(savedTodos);
    }, []);
  
    const addTodo = (todo: string) => {
      const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };
  
    const toggleComplete = (id: string) => {
      const newTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };
  
    const deleteTodo = (id: string) => {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };
  
    const editTodo = (id: string) => {
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
    };
  
    const editTask = (task: string, id: string) => {
      const newTodos = todos.map(todo =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      );
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
    };
  
    return (
      <div className="TodoWrapper">
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    );
  };