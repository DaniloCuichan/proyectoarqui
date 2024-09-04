// src/components/SolicitudCreditoList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const OBTENER_SOLICITUDES = gql`
    query ObtenerSolicitudesCredito {
        solicitudes {
            id_solicitud
            monto_solicitado
            fecha_solicitud
            estado
            puntaje_crediticio
            usuario_id
        }
    }
`;

const ELIMINAR_SOLICITUD = gql`
    mutation EliminarSolicitudCredito($id_solicitud: ID!) {
        eliminarSolicitudCredito(id_solicitud: $id_solicitud)
    }
`;

const SolicitudCreditoList = ({ onEdit }) => {
    const { data, loading, error, refetch } = useQuery(OBTENER_SOLICITUDES);

    const [eliminarSolicitud] = useMutation(ELIMINAR_SOLICITUD, {
        onCompleted: () => refetch(),
        onError: (error) => console.error(error),
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Solicitudes de Crédito</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Monto Solicitado</th>
                        <th>Fecha Solicitud</th>
                        <th>Estado</th>
                        <th>Puntaje Crediticio</th>
                        <th>Usuario ID</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.solicitudes.map((solicitud) => (
                        <tr key={solicitud.id_solicitud}>
                            <td>{solicitud.id_solicitud}</td>
                            <td>{solicitud.monto_solicitado}</td>
                            <td>{new Date(solicitud.fecha_solicitud).toLocaleString()}</td>
                            <td>{solicitud.estado}</td>
                            <td>{solicitud.puntaje_crediticio}</td>
                            <td>{solicitud.usuario_id}</td>
                            <td>
                                <button onClick={() => onEdit(solicitud)}>Editar</button>
                                <button onClick={() => eliminarSolicitud({ variables: { id_solicitud: solicitud.id_solicitud } })}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SolicitudCreditoList;
