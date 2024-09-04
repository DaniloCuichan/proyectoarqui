// backend/graphql/typeDefs/historialCrediticio.js
const { gql } = require('apollo-server-express');

const historialCrediticioTypeDefs = gql`
    type HistorialCrediticio {
        id_historial: ID!
        puntaje_buro: Float!
        deudas_actuales: String
        historial_pagos: String
        usuario_id: Int
    }

    type Query {
        historialesCrediticios: [HistorialCrediticio!]!
        historialCrediticio(id: ID!): HistorialCrediticio
    }

    type Mutation {
        crearHistorialCrediticio(
            puntaje_buro: Float!,
            deudas_actuales: String,
            historial_pagos: String,
            usuario_id: Int
        ): HistorialCrediticio!
        actualizarHistorialCrediticio(
            id: ID!,
            puntaje_buro: Float,
            deudas_actuales: String,
            historial_pagos: String,
            usuario_id: Int
        ): HistorialCrediticio!
        eliminarHistorialCrediticio(id: ID!): String!
    }
`;

module.exports = historialCrediticioTypeDefs;
