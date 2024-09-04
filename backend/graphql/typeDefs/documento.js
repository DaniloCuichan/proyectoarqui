// backend/graphql/typeDefs/documento.js
const { gql } = require('apollo-server-express');

const documentoTypeDefs = gql`
    type Documento {
        id_documento: ID!
        tipo_documento: String!
        url_documento: String!
        solicitud_id: Int
    }

    type Query {
        documentos: [Documento!]!
        documento(id: ID!): Documento
    }

    type Mutation {
        crearDocumento(
            tipo_documento: String!,
            url_documento: String!,
            solicitud_id: Int
        ): Documento!
        actualizarDocumento(
            id: ID!,
            tipo_documento: String,
            url_documento: String,
            solicitud_id: Int
        ): Documento!
        eliminarDocumento(id: ID!): String!
    }
`;

module.exports = documentoTypeDefs;
