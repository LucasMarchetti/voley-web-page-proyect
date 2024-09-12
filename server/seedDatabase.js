import { Sequelize } from 'sequelize';
import Usuario from './models/usuario.js';
import Permiso from './models/permiso.js';
import UsuarioPermiso from './models/usuarioPermiso.js';
import Federacion from './models/federacion.js';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const agregarDatosDePrueba = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida.');

    await Federacion.create({ nombre_federacion: "federacion catamarqueña" });
    const usuario = await Usuario.create({
      nombre_usuario: 'Juan Pérez',
      email: 'juan@example.com',
      password: "123123",
      id_federacion: 1,
      es_administrador: true
    });
    const permiso1 = await Permiso.create({ nombre_permiso: 'Permiso de acceso total' });
    const permiso2 = await Permiso.create({ nombre_permiso: 'Permiso de acceso limitado' });


    const usuarioExistente = await Usuario.findByPk(usuario.id_usuario);
    const permisoExistente1 = await Permiso.findByPk(permiso1.id_permiso);
    const permisoExistente2 = await Permiso.findByPk(permiso2.id_permiso);

    if (usuarioExistente && permisoExistente1 && permisoExistente2) {
        await UsuarioPermiso.create({ id_usuario: usuario.id_usuario, id_permiso: permiso1.id_permiso });
        await UsuarioPermiso.create({ id_usuario: usuario.id_usuario, id_permiso: permiso2.id_permiso });
      console.log('Datos de prueba agregados exitosamente.');
    } else {
      console.error('Error: Usuario o permisos no encontrados.');
    }
  } catch (error) {
    console.error('Error al agregar datos de prueba:', error);
  } finally {
    await sequelize.close();
  }
};

agregarDatosDePrueba();
