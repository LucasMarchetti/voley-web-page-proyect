
import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";
import Equipo from "./equipo.js";
import Categoria from "./categoria.js";
import Estadio from "./estadio.js";
import Torneo from "./torneo.js";


const Partido = sequelize.define('Partido', {
    id_partido: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_torneo: {
        type: DataTypes.INTEGER,
        references: {
            model: Torneo,
            key: 'id_torneo',
        },
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
    fecha_torneo: {
        type: DataTypes.INTEGER,
    },
    sets_local: {
        type: DataTypes.INTEGER,
    },
    sets_visitante: {
        type: DataTypes.INTEGER,
    },
    dia: {
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

export default Partido;
