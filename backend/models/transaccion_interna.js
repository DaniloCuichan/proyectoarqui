// backend/models/transaccion_interna.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./usuario');

const TransaccionInterna = sequelize.define('TransaccionInterna', {
    id_transaccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_transaccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha_transaccion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    }
}, {
    tableName: 'transacciones_internas',
    timestamps: false
});

// Definir la relación entre Usuario y TransaccionInterna
Usuario.hasMany(TransaccionInterna, { foreignKey: 'usuario_id' });
TransaccionInterna.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = TransaccionInterna;
