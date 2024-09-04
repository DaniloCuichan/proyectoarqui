// backend/graphql/typeDefs/analistaCredito.js
const { gql } = require('apollo-server-express');

const analistaCreditoTypeDefs = gql`
    type AnalistaCredito {
        id_analista: ID!
        nombre: String!
        correo_electronico: String!
    }

    type Query {
        analistasCredito: [AnalistaCredito!]!
        analistaCredito(id: ID!): AnalistaCredito
    }

    type Mutation {
        crearAnalistaCredito(
            nombre: String!,
            correo_electronico: String!
        ): AnalistaCredito!
        actualizarAnalistaCredito(
            id: ID!,
            nombre: String,
            correo_electronico: String
        ): AnalistaCredito!
        eliminarAnalistaCredito(id: ID!): String!
    }
`;

module.exports = analistaCreditoTypeDefs;
