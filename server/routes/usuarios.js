
import express from 'express';
import Usuario from '../models/usuario.js';
import UsuarioPermiso from '../models/usuarioPermiso.js';
import Permiso from '../models/permiso.js';

const router = express.Router();

// Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  try {
    const { permisos, ...usuarioData } = req.body;
    const usuario = await Usuario.create(usuarioData);

    // Asignar permisos si es necesario
    if (permisos) {
      for (const permisoId of permisos) {
        await UsuarioPermiso.create({ id_usuario: usuario.id_usuario, id_permiso: permisoId });
      }
    }

    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: {
        model: Permiso,
        through: { attributes: [] }
      }
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un usuario
router.put('/usuarios/:id', async (req, res) => {
  try {
    const { permisos, ...usuarioData } = req.body;
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    
    await usuario.update(usuarioData);

    // Actualizar permisos
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

// Eliminar un usuario
router.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    await usuario.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
