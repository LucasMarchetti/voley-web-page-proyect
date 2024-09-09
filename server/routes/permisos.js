
import express from 'express';
import Permiso from '../models/permiso.js';

const router = express.Router();

// Crear un nuevo permiso
router.post('/permisos', async (req, res) => {
  try {
    const permiso = await Permiso.create(req.body);
    res.status(201).json(permiso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los permisos
router.get('/permisos', async (req, res) => {
  try {
    const permisos = await Permiso.findAll();
    res.json(permisos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un permiso
router.put('/permisos/:id', async (req, res) => {
  try {
    const permiso = await Permiso.findByPk(req.params.id);
    if (!permiso) return res.status(404).json({ error: 'Permiso no encontrado' });
    await permiso.update(req.body);
    res.json(permiso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un permiso
router.delete('/permisos/:id', async (req, res) => {
  try {
    const permiso = await Permiso.findByPk(req.params.id);
    if (!permiso) return res.status(404).json({ error: 'Permiso no encontrado' });
    await permiso.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
