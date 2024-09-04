// backend/graphql/resolvers/transaccionInterna.js
const TransaccionInterna = require('../../models/transaccion_interna');

const transaccionInternaResolvers = {
    Query: {
        transaccionesInternas: async () => {
            try {
                return await TransaccionInterna.findAll();
            } catch (error) {
                throw new Error('Error al obtener las transacciones internas');
            }
        },
        transaccionInterna: async (_, { id }) => {
            try {
                return await TransaccionInterna.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener la transacción interna');
            }
        },
    },
    Mutation: {
        crearTransaccionInterna: async (_, { tipo_transaccion, monto, fecha_transaccion, solicitud_id, descripcion }) => {
            try {
                const nuevaTransaccion = await TransaccionInterna.create({
                    tipo_transaccion,
                    monto,
                    fecha_transaccion,
                    solicitud_id,
                    descripcion
                });
                return nuevaTransaccion;
            } catch (error) {
                throw new Error('Error al crear la transacción interna');
            }
        },
        actualizarTransaccionInterna: async (_, { id, tipo_transaccion, monto, fecha_transaccion, solicitud_id, descripcion }) => {
            try {
                const transaccion = await TransaccionInterna.findByPk(id);
                if (!transaccion) {
                    throw new Error('Transacción interna no encontrada');
                }
                await transaccion.update({ tipo_transaccion, monto, fecha_transaccion, solicitud_id, descripcion });
                return transaccion;
            } catch (error) {
                throw new Error('Error al actualizar la transacción interna');
            }
        },
        eliminarTransaccionInterna: async (_, { id }) => {
            try {
                const transaccion = await TransaccionInterna.findByPk(id);
                if (!transaccion) {
                    throw new Error('Transacción interna no encontrada');
                }
                await transaccion.destroy();
                return 'Transacción interna eliminada correctamente';
            } catch (error) {
                throw new Error('Error al eliminar la transacción interna');
            }
        },
    },
};

module.exports = transaccionInternaResolvers;
