// backend/graphql/typeDefs/logActividad.js
const { gql } = require('apollo-server-express');

const logActividadTypeDefs = gql`
    type LogActividad {
        id_log: ID!
        fecha_actividad: String!
        tipo_actividad: String!
        usuario_id: Int
        analista_id: Int
        descripcion: String!
    }

    type Query {
        logsActividad: [LogActividad!]!
        logActividad(id: ID!): LogActividad
    }

    type Mutation {
        crearLogActividad(
            fecha_actividad: String!,
            tipo_actividad: String!,
            usuario_id: Int,
            analista_id: Int,
            descripcion: String!
        ): LogActividad!
        actualizarLogActividad(
            id: ID!,
            fecha_actividad: String,
            tipo_actividad: String,
            usuario_id: Int,
            analista_id: Int,
            descripcion: String
        ): LogActividad!
        eliminarLogActividad(id: ID!): String!
    }
`;

module.exports = logActividadTypeDefs;
