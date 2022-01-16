import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IAboutPage {}

export default function AboutPage(params: IAboutPage) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        nostrum voluptate voluptatum placeat ullam sed porro libero eius fuga
        dolor minus vero laboriosam aut corporis, minima eum assumenda in hic.
      </p>
      <button className="btn" onClick={() => navigate('../todos')}>
        Обратно к списку дел
      </button>
    </>
  );
}
