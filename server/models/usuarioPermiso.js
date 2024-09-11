
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js';
import Usuario from './usuario.js';
import Permiso from './permiso.js';

const UsuarioPermiso = sequelize.define('UsuarioPermiso', {
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario',
        },
    },
    id_permiso: {
        type: DataTypes.INTEGER,
        references: {
            model: Permiso,
            key: 'id_permiso',
        },
    },
}, {
    tableName: 'usuario_permiso',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['id_usuario', 'id_permiso'],
        },
    ],
});

export default UsuarioPermiso;
