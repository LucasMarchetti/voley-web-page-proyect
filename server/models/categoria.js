const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
    id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    abreviacion: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'categoria',
    timestamps: false,
});

module.exports = Categoria;
