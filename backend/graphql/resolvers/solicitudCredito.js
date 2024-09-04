// backend/graphql/resolvers/solicitudCredito.js
const SolicitudCredito = require('../../models/solicitud_credito');

const solicitudCreditoResolvers = {
    Query: {
        solicitudesCredito: async () => {
            try {
                return await SolicitudCredito.findAll();
            } catch (error) {
                throw new Error('Error al obtener las solicitudes de crédito');
            }
        },
        solicitudCredito: async (_, { id }) => {
            try {
                return await SolicitudCredito.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener la solicitud de crédito');
            }
        },
    },
    Mutation: {
        crearSolicitudCredito: async (_, { monto_solicitado, fecha_solicitud, estado, puntaje_crediticio, usuario_id }) => {
            try {
                const nuevaSolicitud = await SolicitudCredito.create({
                    monto_solicitado,
                    fecha_solicitud,
                    estado,
                    puntaje_crediticio,
                    usuario_id
                });
                return nuevaSolicitud;
            } catch (error) {
                throw new Error('Error al crear la solicitud de crédito');
            }
        },
        actualizarSolicitudCredito: async (_, { id, monto_solicitado, fecha_solicitud, estado, puntaje_crediticio, usuario_id }) => {
            try {
                const solicitud = await SolicitudCredito.findByPk(id);
                if (!solicitud) {
                    throw new Error('Solicitud de crédito no encontrada');
                }
                await solicitud.update({ monto_solicitado, fecha_solicitud, estado, puntaje_crediticio, usuario_id });
                return solicitud;
            } catch (error) {
                throw new Error('Error al actualizar la solicitud de crédito');
            }
        },
        eliminarSolicitudCredito: async (_, { id }) => {
            try {
                const solicitud = await SolicitudCredito.findByPk(id);
                if (!solicitud) {
                    throw new Error('Solicitud de crédito no encontrada');
                }
                await solicitud.destroy();
                return 'Solicitud de crédito eliminada correctamente';
            } catch (error) {
                throw new Error('Error al eliminar la solicitud de crédito');
            }
        },
    },
};

module.exports = solicitudCreditoResolvers;
