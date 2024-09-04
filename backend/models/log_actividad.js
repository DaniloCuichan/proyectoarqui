// backend/models/log_actividad.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuario');
const AnalistaCredito = require('./analista_credito');

const LogActividad = sequelize.define('LogActividad', {
    id_log: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_actividad: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    tipo_actividad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        },
        allowNull: true
    },
    analista_id: {
        type: DataTypes.INTEGER,
        references: {
            model: AnalistaCredito,
            key: 'id_analista'
        },
        allowNull: true
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'logs_actividad',
    timestamps: false
});

module.exports = LogActividad;
