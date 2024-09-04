// src/App.js o src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SolicitudCredito from './pages/SolicitudCredito';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/solicitudes" element={<SolicitudCredito />} />
            </Routes>
        </Router>
    );
};

export default App;
