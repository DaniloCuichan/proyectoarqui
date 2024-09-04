// backend/models/solicitud_credito.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuario');

const SolicitudCredito = sequelize.define('SolicitudCredito', {
    id_solicitud: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    monto_solicitado: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha_solicitud: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    puntaje_crediticio: {
        type: DataTypes.FLOAT,
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
    tableName: 'solicitudes_credito',
    timestamps: false
});

// Definir la relación entre Usuario y SolicitudCredito
Usuario.hasMany(SolicitudCredito, { foreignKey: 'usuario_id' });
SolicitudCredito.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = SolicitudCredito;
