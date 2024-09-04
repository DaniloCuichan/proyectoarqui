// frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li><Link to="/solicitud">Registrar Solicitud de Crédito</Link></li>
          <li><Link to="/solicitudes">Ver Solicitudes de Crédito</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
