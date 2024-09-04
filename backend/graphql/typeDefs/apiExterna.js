// backend/graphql/typeDefs/apiExterna.js
const { gql } = require('apollo-server-express');

const apiExternaTypeDefs = gql`
    type ApiExterna {
        id_api: ID!
        nombre_api: String!
        url_base: String!
        tipo_api: String!
    }

    type Query {
        apisExternas: [ApiExterna!]!
        apiExterna(id: ID!): ApiExterna
    }

    type Mutation {
        crearApiExterna(
            nombre_api: String!,
            url_base: String!,
            tipo_api: String!
        ): ApiExterna!
        actualizarApiExterna(
            id: ID!,
            nombre_api: String,
            url_base: String,
            tipo_api: String
        ): ApiExterna!
        eliminarApiExterna(id: ID!): String!
    }
`;

module.exports = apiExternaTypeDefs;
