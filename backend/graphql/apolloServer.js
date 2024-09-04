// backend/graphql/apolloServer.js
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const autenticacion = require('../middlewares/autenticacion');
const express = require('express');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const server = new ApolloServer({
    schema,
    context: ({ req }) => {
        const token = req.headers.authorization || '';
        const usuario = autenticacion(token);
        return { usuario };
    },
});

const app = express();
server.start().then(() => {
    app.use(
        '/graphql',
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({
                token: req.headers.authorization,
            }),
        })
    );

    // Middleware de autenticación para rutas REST
    app.use(autenticacion);

    // Otras rutas REST
    // app.use('/api/usuarios', usuarioRoutes);
    // app.use('/api/solicitudes-credito', solicitudCreditoRoutes);
    // ...

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/graphql`);
    });
});

module.exports = app;
