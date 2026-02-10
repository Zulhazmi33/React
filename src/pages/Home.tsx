import React, { useEffect, useState } from 'react';
import { fetchTodos } from '../services/api';
import type { Todo } from '../services/api';
import TodoItem from '../components/TodoItem';
import TodoForm from '../components/TodoForm';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addTodo = (title: string) => {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
