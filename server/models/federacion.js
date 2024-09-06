
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';

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

export default Federacion;
