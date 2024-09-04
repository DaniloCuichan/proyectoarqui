import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="../pages">Solicitudes de Crédito</Link></li>
        <li><Link to="/solicitudes-creditsoForm">Solicitudes de Crédito Form</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
