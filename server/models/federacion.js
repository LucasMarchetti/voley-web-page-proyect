const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Federacion = sequelize.define('Federacion', {
    id_federacion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_federacion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'federacion',
    timestamps: false,
});

module.exports = Federacion;