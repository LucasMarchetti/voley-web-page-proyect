const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Equipo = sequelize.define('Equipo', {
    id_equipo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_equipo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'equipo',
    timestamps: false,
});

module.exports = Equipo;
