import React from 'react';
import { ITodo } from '../interfaces';

interface ITodoListProps {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoList({
  todos,
  onToggle,
  onRemove,
}: ITodoListProps) {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет!</p>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onRemove(id);
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="todo">
          <label>
            <input
              type="checkbox"
              checked={todo.complited}
              onChange={onToggle.bind(null, todo.id)}
            />
            <span className={todo.complited ? 'complited' : ''}>
              {todo.title}
            </span>
            <i
              className="material-icons red-text"
              onClick={(e) => removeHandler(e, todo.id)}
            >
              delete
            </i>
          </label>
        </li>
      ))}
    </ul>
  );
}
