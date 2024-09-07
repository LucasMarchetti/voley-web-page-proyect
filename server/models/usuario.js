
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_federacion: {
        type: DataTypes.INTEGER,
        references: {
            model: 'federacion',
            key: 'id_federacion',
        },
    },
    es_administrador: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'usuario',
    timestamps: false,
});

export default Usuario;
