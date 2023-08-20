import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

interface Todo {
  id: string; // Changed to string type
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodoProps {
  task: Todo;
  deleteTodo: (id: string) => void; // Changed to string type
  editTodo: (id: string) => void; // Changed to string type
  toggleComplete: (id: string) => void; // Changed to string type
}



const Todo: React.FC<TodoProps> = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
