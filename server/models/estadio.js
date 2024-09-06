
import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

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

export default Estadio;
