import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean;
interface ITodosPages {}

export default function TodosPages(params: ITodosPages) {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      complited: false,
    };
    setTodos((prev: ITodo[]) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev: ITodo[]) => {
      const newTodos: ITodo[] = prev.map((i) => {
        let newComplited = i.complited;
        if (i.id === id) {
          newComplited = !i.complited;
        }
        return { ...i, complited: newComplited };
      });
      return newTodos;
    });
  };
  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены что хотите удалить дело?');
    if (shouldRemove)
      setTodos((prev: ITodo[]) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
}
