import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/dbConfig.js'; // Asegúrate de que esta ruta sea correcta

// Importar rutas
import usuariosRoutes from './routes/usuarios.js';
import permisosRoutes from './routes/permisos.js';
// import federacionesRoutes from './routes/federaciones.js';
// import torneosRoutes from './routes/torneos.js';
// import partidosRoutes from './routes/partidos.js';
// import equiposRoutes from './routes/equipos.js';
// import categoriasRoutes from './routes/categorias.js';
// import estadiosRoutes from './routes/estadios.js';

const app = express();
const port = process.env.PORT || 3000; // Puedes ajustar el puerto aquí

app.use(bodyParser.json()); // Para analizar el cuerpo de las solicitudes como JSON

// Usar las rutas definidas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/permisos', permisosRoutes);
// app.use('/api/federaciones', federacionesRoutes);
// app.use('/api/torneos', torneosRoutes);
// app.use('/api/partidos', partidosRoutes);
// app.use('/api/equipos', equiposRoutes);
// app.use('/api/categorias', categoriasRoutes);
// app.use('/api/estadios', estadiosRoutes);

// Sincronizar la base de datos y arrancar el servidor
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
