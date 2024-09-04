// backend/models/documento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const SolicitudCredito = require('./solicitud_credito');

const Documento = sequelize.define('Documento', {
    id_documento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    solicitud_id: {
        type: DataTypes.INTEGER,
        references: {
            model: SolicitudCredito,
            key: 'id_solicitud'
        }
    }
}, {
    tableName: 'documentos',
    timestamps: false
});

// Definir la relación entre SolicitudCredito y Documento
SolicitudCredito.hasMany(Documento, { foreignKey: 'solicitud_id' });
Documento.belongsTo(SolicitudCredito, { foreignKey: 'solicitud_id' });

module.exports = Documento;
