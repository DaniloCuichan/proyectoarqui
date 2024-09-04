// backend/graphql/typeDefs/resultadoEvaluacion.js
const { gql } = require('apollo-server-express');

const resultadoEvaluacionTypeDefs = gql`
    type ResultadoEvaluacion {
        id_resultado: ID!
        solicitud_id: Int
        resultado: String!
        comentarios: String
    }

    type Query {
        resultadosEvaluacion: [ResultadoEvaluacion!]!
        resultadoEvaluacion(id: ID!): ResultadoEvaluacion
    }

    type Mutation {
        crearResultadoEvaluacion(
            solicitud_id: Int,
            resultado: String!,
            comentarios: String
        ): ResultadoEvaluacion!
        actualizarResultadoEvaluacion(
            id: ID!,
            solicitud_id: Int,
            resultado: String,
            comentarios: String
        ): ResultadoEvaluacion!
        eliminarResultadoEvaluacion(id: ID!): String!
    }
`;

module.exports = resultadoEvaluacionTypeDefs;
