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


sequelize.sync({ force: false })
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
Federacion.hasMany(Equipo, {foreignKey: 'id_federacion'});
Equipo.belongsTo(Federacion, {foreignKey: 'id_federacion'});

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


import express from 'express';
import bodyParser from 'body-parser';

import usuariosRoutes from './routes/usuarios.js';
import federacionesRoutes from './routes/federaciones.js';
import equiposRoutes from './routes/equipos.js';
import categoriasRoutes from './routes/categorias.js';
import estadiosRoutes from './routes/estadios.js';
import permisosRoutes from './routes/permisos.js';
import torneosRoutes from './routes/torneos.js';
import partidosRoutes from './routes/partidos.js';

import authenticate from './middlewares/authenticate.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/usuarios',  usuariosRoutes);
app.use('/api/federaciones',  federacionesRoutes);
app.use('/api/equipos',  equiposRoutes);
app.use('/api/categorias',  categoriasRoutes);
app.use('/api/estadios',  estadiosRoutes);
app.use('/api/permisos',  permisosRoutes);
app.use('/api/torneos',  torneosRoutes);
app.use('/api/partidos',  partidosRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });
