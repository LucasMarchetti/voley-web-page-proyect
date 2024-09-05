const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estadio = sequelize.define('Estadio', {
    id_estadio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_estadio: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'estadio',
    timestamps: false,
});

module.exports = Estadio;
