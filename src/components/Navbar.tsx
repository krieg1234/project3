import React from 'react';
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-1 px1">
        <a href="/" className="brand-logo">
          React+TS=LOVE
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/todos">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
