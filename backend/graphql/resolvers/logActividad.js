// backend/graphql/resolvers/logActividad.js
const LogActividad = require('../../models/log_actividad');

const logActividadResolvers = {
    Query: {
        logsActividad: async () => {
            try {
                return await LogActividad.findAll();
            } catch (error) {
                throw new Error('Error al obtener los logs de actividad');
            }
        },
        logActividad: async (_, { id }) => {
            try {
                return await LogActividad.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el log de actividad');
            }
        },
    },
    Mutation: {
        crearLogActividad: async (_, { fecha_actividad, tipo_actividad, usuario_id, analista_id, descripcion }) => {
            try {
                const nuevoLog = await LogActividad.create({
                    fecha_actividad,
                    tipo_actividad,
                    usuario_id,
                    analista_id,
                    descripcion
                });
                return nuevoLog;
            } catch (error) {
                throw new Error('Error al crear el log de actividad');
            }
        },
        actualizarLogActividad: async (_, { id, fecha_actividad, tipo_actividad, usuario_id, analista_id, descripcion }) => {
            try {
                const log = await LogActividad.findByPk(id);
                if (!log) {
                    throw new Error('Log de actividad no encontrado');
                }
                await log.update({ fecha_actividad, tipo_actividad, usuario_id, analista_id, descripcion });
                return log;
            } catch (error) {
                throw new Error('Error al actualizar el log de actividad');
            }
        },
        eliminarLogActividad: async (_, { id }) => {
            try {
                const log = await LogActividad.findByPk(id);
                if (!log) {
                    throw new Error('Log de actividad no encontrado');
                }
                await log.destroy();
                return 'Log de actividad eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el log de actividad');
            }
        },
    },
};

module.exports = logActividadResolvers;
