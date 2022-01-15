import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

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
    const shouldRemove = window.confirm('Вы уверены что хотите удалить дело?');
    if (shouldRemove)
      setTodos((prev: ITodo[]) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};

export default App;
