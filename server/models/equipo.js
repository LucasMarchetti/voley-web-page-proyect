
import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Equipo = sequelize.define('Equipo', {
    id_equipo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_equipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logo_equipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_federacion: {
        type: DataTypes.INTEGER,
        //allowNull: false,
        references: {
            model: 'federacion',
            key: 'id_federacion',
        },
    },
}, {
    tableName: 'equipo',
    timestamps: false,
});

export default Equipo;
