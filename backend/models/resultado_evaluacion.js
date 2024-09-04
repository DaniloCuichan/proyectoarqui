// backend/models/resultado_evaluacion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const SolicitudCredito = require('./solicitud_credito');

const ResultadoEvaluacion = sequelize.define('ResultadoEvaluacion', {
    id_resultado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    solicitud_id: {
        type: DataTypes.INTEGER,
        references: {
            model: SolicitudCredito,
            key: 'id_solicitud'
        }
    },
    resultado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comentarios: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'resultados_evaluacion',
    timestamps: false
});

// Definir la relación entre SolicitudCredito y ResultadoEvaluacion
SolicitudCredito.hasOne(ResultadoEvaluacion, { foreignKey: 'solicitud_id' });
ResultadoEvaluacion.belongsTo(SolicitudCredito, { foreignKey: 'solicitud_id' });

module.exports = ResultadoEvaluacion;
