
import {DataTypes} from "sequelize";
import sequelize from '../config/dbConfig.js';
import Federacion from "./federacion.js";

const Torneo = sequelize.define('Torneo', {
    id_torneo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_torneo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_inicio: {
        type: DataTypes.DATE,
    },
    fecha_final: {
        type: DataTypes.DATE,
    },
    id_federacion: {
        type: DataTypes.INTEGER,
        references: {
            model: Federacion,
            key: 'id_federacion',
        },
    },
}, {
    tableName: 'torneo',
    timestamps: false,
});

export default Torneo;
