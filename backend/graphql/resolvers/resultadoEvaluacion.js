// backend/graphql/resolvers/resultadoEvaluacion.js
const ResultadoEvaluacion = require('../../models/resultado_evaluacion');

const resultadoEvaluacionResolvers = {
    Query: {
        resultadosEvaluacion: async () => {
            try {
                return await ResultadoEvaluacion.findAll();
            } catch (error) {
                throw new Error('Error al obtener los resultados de evaluación');
            }
        },
        resultadoEvaluacion: async (_, { id }) => {
            try {
                return await ResultadoEvaluacion.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el resultado de evaluación');
            }
        },
    },
    Mutation: {
        crearResultadoEvaluacion: async (_, { solicitud_id, resultado, comentarios }) => {
            try {
                const nuevoResultado = await ResultadoEvaluacion.create({
                    solicitud_id,
                    resultado,
                    comentarios
                });
                return nuevoResultado;
            } catch (error) {
                throw new Error('Error al crear el resultado de evaluación');
            }
        },
        actualizarResultadoEvaluacion: async (_, { id, solicitud_id, resultado, comentarios }) => {
            try {
                const resultadoEvaluacion = await ResultadoEvaluacion.findByPk(id);
                if (!resultadoEvaluacion) {
                    throw new Error('Resultado de evaluación no encontrado');
                }
                await resultadoEvaluacion.update({ solicitud_id, resultado, comentarios });
                return resultadoEvaluacion;
            } catch (error) {
                throw new Error('Error al actualizar el resultado de evaluación');
            }
        },
        eliminarResultadoEvaluacion: async (_, { id }) => {
            try {
                const resultadoEvaluacion = await ResultadoEvaluacion.findByPk(id);
                if (!resultadoEvaluacion) {
                    throw new Error('Resultado de evaluación no encontrado');
                }
                await resultadoEvaluacion.destroy();
                return 'Resultado de evaluación eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el resultado de evaluación');
            }
        },
    },
};

module.exports = resultadoEvaluacionResolvers;
