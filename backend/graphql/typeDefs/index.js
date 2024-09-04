// backend/graphql/typeDefs/index.js
const { gql } = require('apollo-server-express');
const usuarioTypeDefs = require('./usuario');
const solicitudCreditoTypeDefs = require('./solicitudCredito');
const documentoTypeDefs = require('./documento');
const historialCrediticioTypeDefs = require('./historialCrediticio');
const resultadoEvaluacionTypeDefs = require('./resultadoEvaluacion');
const transaccionInternaTypeDefs = require('./transaccionInterna');
const apiExternaTypeDefs = require('./apiExterna');
const logActividadTypeDefs = require('./logActividad');
const analistaCreditoTypeDefs = require('./analistaCredito');

const rootTypeDefs = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

const typeDefs = [
    rootTypeDefs,
    usuarioTypeDefs,
    solicitudCreditoTypeDefs,
    documentoTypeDefs,
    historialCrediticioTypeDefs,
    resultadoEvaluacionTypeDefs,
    transaccionInternaTypeDefs,
    apiExternaTypeDefs,
    logActividadTypeDefs,
    analistaCreditoTypeDefs,
];

module.exports = typeDefs;
