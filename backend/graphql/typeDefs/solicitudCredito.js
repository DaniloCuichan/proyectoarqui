// backend/graphql/typeDefs/solicitudCredito.js
const { gql } = require('apollo-server-express');

const solicitudCreditoTypeDefs = gql`
    type SolicitudCredito {
        id_solicitud: ID!
        monto_solicitado: Float!
        fecha_solicitud: String!
        estado: String!
        puntaje_crediticio: Float
        usuario_id: Int
    }

    type Query {
        solicitudesCredito: [SolicitudCredito!]!
        solicitudCredito(id: ID!): SolicitudCredito
    }

    type Mutation {
        crearSolicitudCredito(
            monto_solicitado: Float!,
            fecha_solicitud: String!,
            estado: String!,
            puntaje_crediticio: Float,
            usuario_id: Int
        ): SolicitudCredito!
        actualizarSolicitudCredito(
            id: ID!,
            monto_solicitado: Float,
            fecha_solicitud: String,
            estado: String,
            puntaje_crediticio: Float,
            usuario_id: Int
        ): SolicitudCredito!
        eliminarSolicitudCredito(id: ID!): String!
    }
`;

module.exports = solicitudCreditoTypeDefs;
