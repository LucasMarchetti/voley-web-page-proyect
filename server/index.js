import sequelize from './config/dbConfig.js';
import Federacion from './models/federacion.js';
import Torneo from './models/torneo.js';
import Partido from './models/partido.js';
import Equipo from './models/equipo.js';
import Categoria from './models/categoria.js';
import Estadio from './models/estadio.js';

// Sincronizar base de datos
sequelize.sync({ force: true }) // 'force: true' elimina las tablas si ya existen y las vuelve a crear
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

// Definir relaciones
Torneo.belongsTo(Federacion, { foreignKey: 'id_federacion' });
Federacion.hasMany(Torneo, { foreignKey: 'id_federacion' });

// Ajustar nombres de asociaciones para evitar conflictos
Partido.belongsTo(Equipo, { as: 'equipoLocal', foreignKey: 'equipo_local' });
Partido.belongsTo(Equipo, { as: 'equipoVisitante', foreignKey: 'equipo_visitante' });
Equipo.hasMany(Partido, { as: 'partidosComoLocal', foreignKey: 'equipo_local' });
Equipo.hasMany(Partido, { as: 'partidosComoVisitante', foreignKey: 'equipo_visitante' });

Partido.belongsTo(Categoria, { foreignKey: 'id_categoria' });
Categoria.hasMany(Partido, { foreignKey: 'id_categoria' });

Partido.belongsTo(Estadio, { foreignKey: 'id_estadio' });
Estadio.hasMany(Partido, { foreignKey: 'id_estadio' });

export {
    sequelize,
    Federacion,
    Torneo,
    Partido,
    Equipo,
    Categoria,
    Estadio
};
