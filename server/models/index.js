const sequelize = require('../config/database');
const { sequelize } = require('./models');

sequelize.sync({ force: true }) // 'force: true' elimina las tablas si ya existen y las vuelve a crear
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

const Federacion = require('./federacion');
const Torneo = require('./torneo');
const Partido = require('./partido');
const Equipo = require('./equipo');
const Categoria = require('./categoria');
const Estadio = require('./estadio');

// Definir relaciones
Torneo.belongsTo(Federacion, { foreignKey: 'id_federacion' });
Federacion.hasMany(Torneo, { foreignKey: 'id_federacion' });

Partido.belongsTo(Equipo, { as: 'equipo_local', foreignKey: 'equipo_local' });
Partido.belongsTo(Equipo, { as: 'equipo_visitante', foreignKey: 'equipo_visitante' });
Equipo.hasMany(Partido, { as: 'partidos_local', foreignKey: 'equipo_local' });
Equipo.hasMany(Partido, { as: 'partidos_visitante', foreignKey: 'equipo_visitante' });

Partido.belongsTo(Categoria, { foreignKey: 'id_categoria' });
Categoria.hasMany(Partido, { foreignKey: 'id_categoria' });

Partido.belongsTo(Estadio, { foreignKey: 'id_estadio' });
Estadio.hasMany(Partido, { foreignKey: 'id_estadio' });

module.exports = {
    sequelize,
    Federacion,
    Torneo,
    Partido,
    Equipo,
    Categoria,
    Estadio
};

