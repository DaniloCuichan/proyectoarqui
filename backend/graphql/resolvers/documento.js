// backend/graphql/resolvers/documento.js
const Documento = require('../../models/documento');

const documentoResolvers = {
    Query: {
        documentos: async () => {
            try {
                return await Documento.findAll();
            } catch (error) {
                throw new Error('Error al obtener los documentos');
            }
        },
        documento: async (_, { id }) => {
            try {
                return await Documento.findByPk(id);
            } catch (error) {
                throw new Error('Error al obtener el documento');
            }
        },
    },
    Mutation: {
        crearDocumento: async (_, { tipo_documento, url_documento, solicitud_id }) => {
            try {
                const nuevoDocumento = await Documento.create({
                    tipo_documento,
                    url_documento,
                    solicitud_id
                });
                return nuevoDocumento;
            } catch (error) {
                throw new Error('Error al crear el documento');
            }
        },
        actualizarDocumento: async (_, { id, tipo_documento, url_documento, solicitud_id }) => {
            try {
                const documento = await Documento.findByPk(id);
                if (!documento) {
                    throw new Error('Documento no encontrado');
                }
                await documento.update({ tipo_documento, url_documento, solicitud_id });
                return documento;
            } catch (error) {
                throw new Error('Error al actualizar el documento');
            }
        },
        eliminarDocumento: async (_, { id }) => {
            try {
                const documento = await Documento.findByPk(id);
                if (!documento) {
                    throw new Error('Documento no encontrado');
                }
                await documento.destroy();
                return 'Documento eliminado correctamente';
            } catch (error) {
                throw new Error('Error al eliminar el documento');
            }
        },
    },
};

module.exports = documentoResolvers;
