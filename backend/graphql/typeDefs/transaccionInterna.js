// backend/graphql/typeDefs/transaccionInterna.js
const { gql } = require('apollo-server-express');

const transaccionInternaTypeDefs = gql`
    type TransaccionInterna {
        id_transaccion: ID!
        tipo_transaccion: String!
        monto: Float!
        fecha_transaccion: String!
        solicitud_id: Int
        descripcion: String
    }

    type Query {
        transaccionesInternas: [TransaccionInterna!]!
        transaccionInterna(id: ID!): TransaccionInterna
    }

    type Mutation {
        crearTransaccionInterna(
            tipo_transaccion: String!,
            monto: Float!,
            fecha_transaccion: String!,
            solicitud_id: Int,
            descripcion: String
        ): TransaccionInterna!
        actualizarTransaccionInterna(
            id: ID!,
            tipo_transaccion: String,
            monto: Float,
            fecha_transaccion: String,
            solicitud_id: Int,
            descripcion: String
        ): TransaccionInterna!
        eliminarTransaccionInterna(id: ID!): String!
    }
`;

module.exports = transaccionInternaTypeDefs;
