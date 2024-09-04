import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            <p>Bienvenido al panel de control.</p>
            
            <div style={{ margin: '20px 0' }}>
                <h2>Opciones</h2>
                <ul>
                    <li>
                        <Link to="/solicitud-credito">Solicitar un Crédito</Link>
                    </li>
                    <li>
                        <Link to="/estado-solicitud">Ver Estado de Solicitudes</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
