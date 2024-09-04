// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
//const { errorHandler } = require('./middleware/errorMiddleware');
//const { authenticate } = require('./middleware/authMiddleware');
const swaggerConfig = require('./config/swagger');

// Rutas REST
const usuarioRoutes = require('./routes/usuario');
const solicitudCreditoRoutes = require('./routes/solicitud_credito');
const documentoRoutes = require('./routes/documento');
const historialCrediticioRoutes = require('./routes/historial_crediticio');
const resultadoEvaluacionRoutes = require('./routes/resultado_evaluacion');
const transaccionInternaRoutes = require('./routes/transaccion_interna');
const apiExternaRoutes = require('./routes/api_externa');
const logActividadRoutes = require('./routes/log_actividad');
const analistaCreditoRoutes = require('./routes/analista_credito');

// GraphQL
const createApolloServer = require('./graphql/server');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); // Para manejar peticiones con cuerpo JSON
app.use(cors()); // Para permitir solicitudes desde otros dominios

// Integración de rutas REST
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/solicitudes-credito', solicitudCreditoRoutes);
app.use('/api/documentos', documentoRoutes);
app.use('/api/historiales-crediticios', historialCrediticioRoutes);
app.use('/api/resultados-evaluacion', resultadoEvaluacionRoutes);
app.use('/api/transacciones-internas', transaccionInternaRoutes);
app.use('/api/apis-externas', apiExternaRoutes);
app.use('/api/logs-actividad', logActividadRoutes);
app.use('/api/analistas-credito', analistaCreditoRoutes);

// Configuración de Swagger
swaggerConfig(app);

// Configurar Apollo Server
async function startApolloServer() {
    const server = createApolloServer();
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    // Middleware de manejo de errores
    ////app.use(errorHandler);
    // Sincronizar modelos con la base de datos
    db.sync({ alter: true })
        .then(() => {
            console.log('Modelos sincronizados con la base de datos');
        })
        .catch(err => {
            console.error('Error al sincronizar modelos con la base de datos:', err);
        });


    // Iniciar servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
        console.log(`GraphQL disponible en http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startApolloServer();
