import express from 'express';
import UsuarioPermiso from '../models/usuarioPermiso.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { id_usuario, id_permiso } = req.body;
    const nuevoUsuarioPermiso = await UsuarioPermiso.create({ id_usuario, id_permiso });
    res.status(201).json(nuevoUsuarioPermiso);
  } catch (error) {
    console.log("Error al asignar permiso a usuario", error);
    res.status(500).json({ error: "Error al asignar permiso a usuario" });
  }
});

router.delete('/', async (req, res) => {
  try {
    const { id_usuario, id_permiso } = req.body;
    await UsuarioPermiso.destroy({ where: { id_usuario, id_permiso } });
    res.status(204).end();
  } catch (error) {
    console.error("Error al eliminar permiso de usuario", error);
    res.status(500).json({ error: "Error al eliminar permiso de usuario" });
  }
});

export default router;
