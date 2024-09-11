
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const TorneoCategoria = sequelize.define('TorneoCategoria', {
    id_torneo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Torneo',
            key: 'id_torneo',
        },
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Categoria',
            key: 'id_categoria',
        },
    },
}, {
    tableName: 'torneo_categoria',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['id_torneo', 'id_categoria'],
        },
    ],
});

export default TorneoCategoria;
