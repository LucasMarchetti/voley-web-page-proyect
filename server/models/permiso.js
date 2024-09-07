
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

const Permiso = sequelize.define('Permiso', {
    id_permiso: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_permiso: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'permiso',
    timestamps: false,
});

export default Permiso;