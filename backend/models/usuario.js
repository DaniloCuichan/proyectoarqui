// backend/models/usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    numero_identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    ingresos_mensuales: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    historial_crediticio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios',
    timestamps: false
});

module.exports = Usuario;
