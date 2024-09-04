// backend/graphql/resolvers/index.js
const usuarioResolvers = require('./usuario');
const solicitudCreditoResolvers = require('./solicitudCredito');
const documentoResolvers = require('./documento');
const historialCrediticioResolvers = require('./historialCrediticio');
const resultadoEvaluacionResolvers = require('./resultadoEvaluacion');
const transaccionInternaResolvers = require('./transaccionInterna');
const apiExternaResolvers = require('./apiExterna');
const logActividadResolvers = require('./logActividad');
const analistaCreditoResolvers = require('./analistaCredito');

const rootResolver = {
    Query: {
        ...usuarioResolvers.Query,
        ...solicitudCreditoResolvers.Query,
        ...documentoResolvers.Query,
        ...historialCrediticioResolvers.Query,
        ...resultadoEvaluacionResolvers.Query,
        ...transaccionInternaResolvers.Query,
        ...apiExternaResolvers.Query,
        ...logActividadResolvers.Query,
        ...analistaCreditoResolvers.Query,
    },
    Mutation: {
        ...usuarioResolvers.Mutation,
        ...solicitudCreditoResolvers.Mutation,
        ...documentoResolvers.Mutation,
        ...historialCrediticioResolvers.Mutation,
        ...resultadoEvaluacionResolvers.Mutation,
        ...transaccionInternaResolvers.Mutation,
        ...apiExternaResolvers.Mutation,
        ...logActividadResolvers.Mutation,
        ...analistaCreditoResolvers.Mutation,
    },
};

module.exports = rootResolver;
