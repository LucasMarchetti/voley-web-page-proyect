
import express from 'express';
import Usuario from '../models/usuario.js';
import UsuarioPermiso from '../models/usuarioPermiso.js';
import Permiso from '../models/permiso.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nombre_usuario, email, password, es_administrador, id_federacion } = req.body;
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password,
      es_administrador,
      id_federacion
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar todos los usuarios" });
  }
});

router.put('/', async (req, res) => {
  try {
    const { permisos, ...usuarioData } = req.body;
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    
    await usuario.update(usuarioData);

    if (permisos) {
      await UsuarioPermiso.destroy({ where: { id_usuario: usuario.id_usuario } });
      for (const permisoId of permisos) {
        await UsuarioPermiso.create({ id_usuario: usuario.id_usuario, id_permiso: permisoId });
      }
    }

    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const idUsuario = req.params.id
      const usuario = await Usuario.findByPk(idUsuario)

      usuario ? 
      await usuario.destroy() && res.status(200).json({ message: 'usuario eliminado correctamente' }) : 
      res.status(404).json({ error: 'usuario no encontrado' })
      
  } catch (error) {
      console.error("Error al eliminar el usuario.", error);
      res.status(500).json({ error : "Error el eliminar el usuario"})
  }
})

export default router;
