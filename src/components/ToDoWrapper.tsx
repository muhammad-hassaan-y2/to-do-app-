'use client'
import React, { useState } from "react";
import { TodoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditToDoForm";
import Todo from "./ToDo";

  
  export const TodoWrapper: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodo = (todo: string) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    };
  
    const deleteTodo = (id: string) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const toggleComplete = (id: string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const editTodo = (id: string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
    };
  
    const editTask = (task: string, id: string) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        )
      );
    };
  
    return (
      <div className="TodoWrapper">
        <h1>To-Do-list App</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) =>
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