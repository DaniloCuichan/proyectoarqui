// backend/graphql/resolvers/historialCrediticio.js
const HistorialCrediticio = require('../../models/historial_crediticio');

const historialCrediticioResolvers = {
    Query: {
        historialesCrediticios: async () => {
            try {
                return await HistorialCrediticio.findAll();
            } catch (error) {
                throw new Error('Error al obtener los historiales crediticios');
            }
        },
        historialCrediticio: async (_, { id }) => {
            try {
                return await HistorialCrediticio.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el historial crediticio');
            }
        },
    },
    Mutation: {
        crearHistorialCrediticio: async (_, { puntaje_buro, deudas_actuales, historial_pagos, usuario_id }) => {
            try {
                const nuevoHistorial = await HistorialCrediticio.create({
                    puntaje_buro,
                    deudas_actuales,
                    historial_pagos,
                    usuario_id
                });
                return nuevoHistorial;
            } catch (error) {
                throw new Error('Error al crear el historial crediticio');
            }
        },
        actualizarHistorialCrediticio: async (_, { id, puntaje_buro, deudas_actuales, historial_pagos, usuario_id }) => {
            try {
                const historial = await HistorialCrediticio.findByPk(id);
                if (!historial) {
                    throw new Error('Historial crediticio no encontrado');
                }
                await historial.update({ puntaje_buro, deudas_actuales, historial_pagos, usuario_id });
                return historial;
            } catch (error) {
                throw new Error('Error al actualizar el historial crediticio');
            }
        },
        eliminarHistorialCrediticio: async (_, { id }) => {
            try {
                const historial = await HistorialCrediticio.findByPk(id);
                if (!historial) {
                    throw new Error('Historial crediticio no encontrado');
                }
                await historial.destroy();
                return 'Historial crediticio eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el historial crediticio');
            }
        },
    },
};

module.exports = historialCrediticioResolvers;
