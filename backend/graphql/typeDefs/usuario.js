// backend/graphql/typeDefs/usuario.js
const { gql } = require('apollo-server-express');

const usuarioTypeDefs = gql`
    type Usuario {
        id_usuario: ID!
        nombre: String!
        correo_electronico: String!
        numero_identificacion: String!
        ingresos_mensuales: Float!
        historial_crediticio: String
        direccion: String!
    }

    type Query {
        usuarios: [Usuario!]!
        usuario(id: ID!): Usuario
    }

    type Mutation {
        crearUsuario(
            nombre: String!,
            correo_electronico: String!,
            numero_identificacion: String!,
            ingresos_mensuales: Float!,
            historial_crediticio: String,
            direccion: String!
        ): Usuario!
        actualizarUsuario(
            id: ID!,
            nombre: String,
            correo_electronico: String,
            numero_identificacion: String,
            ingresos_mensuales: Float,
            historial_crediticio: String,
            direccion: String
        ): Usuario!
        eliminarUsuario(id: ID!): String!
        loginUsuario(correo_electronico: String!, password: String!): AuthPayload!
    }

    type AuthPayload {
        token: String!
        usuario: Usuario!
    }
`;

module.exports = usuarioTypeDefs;
