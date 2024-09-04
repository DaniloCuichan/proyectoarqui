// backend/models/api_externa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const APIExterna = sequelize.define('APIExterna', {
    id_api: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_api: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_base: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_api: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'apis_externas',
    timestamps: false
});

module.exports = APIExterna;
