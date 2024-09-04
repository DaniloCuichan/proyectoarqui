// backend/graphql/resolvers/apiExterna.js
const ApiExterna = require('../../models/api_externa');

const apiExternaResolvers = {
    Query: {
        apisExternas: async () => {
            try {
                return await ApiExterna.findAll();
            } catch (error) {
                throw new Error('Error al obtener las APIs externas');
            }
        },
        apiExterna: async (_, { id }) => {
            try {
                return await ApiExterna.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener la API externa');
            }
        },
    },
    Mutation: {
        crearApiExterna: async (_, { nombre_api, url_base, tipo_api }) => {
            try {
                const nuevaApi = await ApiExterna.create({
                    nombre_api,
                    url_base,
                    tipo_api
                });
                return nuevaApi;
            } catch (error) {
                throw new Error('Error al crear la API externa');
            }
        },
        actualizarApiExterna: async (_, { id, nombre_api, url_base, tipo_api }) => {
            try {
                const api = await ApiExterna.findByPk(id);
                if (!api) {
                    throw new Error('API externa no encontrada');
                }
                await api.update({ nombre_api, url_base, tipo_api });
                return api;
            } catch (error) {
                throw new Error('Error al actualizar la API externa');
            }
        },
        eliminarApiExterna: async (_, { id }) => {
            try {
                const api = await ApiExterna.findByPk(id);
                if (!api) {
                    throw new Error('API externa no encontrada');
                }
                await api.destroy();
                return 'API externa eliminada correctamente';
            } catch (error) {
                throw new Error('Error al eliminar la API externa');
            }
        },
    },
};

module.exports = apiExternaResolvers;
