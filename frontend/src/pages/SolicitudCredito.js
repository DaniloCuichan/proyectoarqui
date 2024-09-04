// src/pages/SolicitudCredito.js
import React, { useState } from 'react';
import SolicitudCreditoForm from '../components/SolicitudCreditoForm';
import SolicitudCreditoList from '../components/SolicitudesCreditoList';

const SolicitudCredito = () => {
    const [selectedSolicitud, setSelectedSolicitud] = useState(null);

    const handleEdit = (solicitud) => {
        setSelectedSolicitud(solicitud);
    };

    const handleSuccess = () => {
        setSelectedSolicitud(null);
    };

    return (
        <div>
            <h1>Gestión de Solicitudes de Crédito</h1>
            <SolicitudCreditoForm solicitud={selectedSolicitud} onSuccess={handleSuccess} />
            <SolicitudCreditoList onEdit={handleEdit} />
        </div>
    );
};

export default SolicitudCredito;
