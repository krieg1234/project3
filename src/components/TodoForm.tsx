import React, { useState, useRef } from 'react';

export interface ITodoFormProps {
  onAdd: (title: string) => void;
}

export function TodoForm(props: ITodoFormProps) {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        onKeyPress={keyPressEnter}
        type="text"
        id="title"
        placeholder="Введите название дела"
      />
      <label htmlFor="title" className="active">
        Название дела
      </label>
    </div>
  );
}
