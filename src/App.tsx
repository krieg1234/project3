import React from 'react';
import { Navbar } from './components/Navbar';
import TodosPages from './pages/TodosPages';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path={'/todos'} element={<TodosPages />}  />
          <Route path={'/about'} element={<AboutPage />}  />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
