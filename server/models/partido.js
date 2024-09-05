const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Equipo = require('./equipo');
const Categoria = require('./categoria');
const Estadio = require('./estadio');

const Partido = sequelize.define('Partido', {
    id_partido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    equipo_local: {
        type: DataTypes.INTEGER,
        references: {
            model: Equipo,
            key: 'id_equipo',
        },
    },
    equipo_visitante: {
        type: DataTypes.INTEGER,
        references: {
            model: Equipo,
            key: 'id_equipo',
        },
    },
    sets_local: {
        type: DataTypes.INTEGER,
    },
    sets_visitante: {
        type: DataTypes.INTEGER,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    hora: {
        type: DataTypes.TIME,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id_categoria',
        },
    },
    id_estadio: {
        type: DataTypes.INTEGER,
        references: {
            model: Estadio,
            key: 'id_estadio',
        },
    },
}, {
    tableName: 'partido',
    timestamps: false,
});

module.exports = Partido;