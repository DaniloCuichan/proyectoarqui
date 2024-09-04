// backend/graphql/server.js
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createApolloServer = () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            // Autenticación para GraphQL
            const token = req.headers.authorization || '';
            if (token) {
                try {
                    const user = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
                    return { user };
                } catch (error) {
                    throw new Error('Token inválido');
                }
            }
            return {};
        },
    });
    return server;
};

module.exports = createApolloServer;
