import sequelize from './config/dbConfig.js';

import Federacion from './models/federacion.js';
import Torneo from './models/torneo.js';
import Partido from './models/partido.js';
import Equipo from './models/equipo.js';
import Categoria from './models/categoria.js';
import Estadio from './models/estadio.js';
import Usuario from './models/usuario.js';
import Permiso from './models/permiso.js';
import UsuarioPermiso from './models/usuarioPermiso.js';
import TorneoCategoria from './models/torneoCategorias.js';


sequelize.sync({ force: true })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

Torneo.belongsTo(Federacion, { foreignKey: 'id_federacion' });
Federacion.hasMany(Torneo, { foreignKey: 'id_federacion' });
Usuario.belongsTo(Federacion, { foreignKey: 'id_federacion' });
Federacion.hasMany(Usuario, { foreignKey: 'id_federacion' });
Partido.belongsTo(Categoria, { foreignKey: 'id_categoria' });
Categoria.hasMany(Partido, { foreignKey: 'id_categoria' });
Partido.belongsTo(Estadio, { foreignKey: 'id_estadio' });
Estadio.hasMany(Partido, { foreignKey: 'id_estadio' });
Torneo.hasMany(Partido, { foreignKey: 'id_torneo' });
Partido.belongsTo(Torneo, { foreignKey: 'id_torneo' });

Partido.belongsTo(Equipo, { as: 'equipoLocal', foreignKey: 'equipo_local' });
Partido.belongsTo(Equipo, { as: 'equipoVisitante', foreignKey: 'equipo_visitante' });
Equipo.hasMany(Partido, { as: 'partidosComoLocal', foreignKey: 'equipo_local' });
Equipo.hasMany(Partido, { as: 'partidosComoVisitante', foreignKey: 'equipo_visitante' });

Permiso.belongsToMany(Usuario, { through: UsuarioPermiso, foreignKey: 'id_permiso' });
Usuario.belongsToMany(Permiso, { through: UsuarioPermiso, foreignKey: 'id_usuario' });
Torneo.belongsToMany(Categoria, { through: TorneoCategoria, foreignKey: 'id_torneo' });
Categoria.belongsToMany(Torneo, { through: TorneoCategoria, foreignKey: 'id_categoria' });

export {
    sequelize,
    Federacion,
    Torneo,
    Partido,
    Equipo,
    Categoria,
    Estadio,
    Usuario,
    Permiso,
    UsuarioPermiso
};
