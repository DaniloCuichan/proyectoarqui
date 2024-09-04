// backend/models/historial_crediticio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuario');

const HistorialCrediticio = sequelize.define('HistorialCrediticio', {
    id_historial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    puntaje_buro: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    deudas_actuales: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    historial_pagos: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    }
}, {
    tableName: 'historiales_crediticios',
    timestamps: false
});

// Definir la relación entre Usuario y HistorialCrediticio
Usuario.hasOne(HistorialCrediticio, { foreignKey: 'usuario_id' });
HistorialCrediticio.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = HistorialCrediticio;
