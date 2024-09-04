// backend/models/analista_credito.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AnalistaCredito = sequelize.define('AnalistaCredito', {
    id_analista: {
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
    }
}, {
    tableName: 'analistas_credito',
    timestamps: false
});

module.exports = AnalistaCredito;
