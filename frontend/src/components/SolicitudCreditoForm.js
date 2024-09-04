// frontend/src/components/SolicitudCreditoForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SolicitudCreditoForm = () => {
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');
  const [estatus, setEstatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const solicitud = { monto: parseFloat(monto), plazo: parseInt(plazo), estatus, id_usuario: 1 }; // Asumiendo id_usuario=1

    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth')}`,
        },
        body: JSON.stringify({
          query: `
            mutation {
              crearSolicitudCredito(
                monto: ${solicitud.monto},
                plazo: ${solicitud.plazo},
                id_usuario: ${solicitud.id_usuario},
                estatus: "${solicitud.estatus}"
              ) {
                id_solicitud
              }
            }
          `,
        }),
      });

      const result = await response.json();
      if (result.errors) {
        console.error(result.errors);
      } else {
        navigate('/solicitudes');
      }
    } catch (error) {
      console.error('Error al crear solicitud:', error);
    }
  };

  return (
    <div>
      <h2>Registrar Solicitud de Crédito</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Monto:</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Plazo (meses):</label>
          <input
            type="number"
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Estatus:</label>
          <input
            type="text"
            value={estatus}
            onChange={(e) => setEstatus(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar Solicitud</button>
      </form>
    </div>
  );
};

export default SolicitudCreditoForm;
