import React from 'react';
import type { Todo } from '../../services/api';
import './TodoItem.css';

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleComplete }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.title}
    </li>
  );
};

export default TodoItem;
