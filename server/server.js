
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/dbConfig.js';

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

app.use('/api/usuarios', authenticate, usuariosRoutes);
app.use('/api/federaciones', authenticate, federacionesRoutes);
app.use('/api/equipos', authenticate, equiposRoutes);
app.use('/api/categorias', authenticate, categoriasRoutes);
app.use('/api/estadios', authenticate, estadiosRoutes);
app.use('/api/permisos', authenticate, permisosRoutes);
app.use('/api/torneos', authenticate, torneosRoutes);
app.use('/api/partidos', authenticate, partidosRoutes);

sequelize.sync({ force: true })
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });
