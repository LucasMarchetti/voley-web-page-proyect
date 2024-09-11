
import express from 'express';
import Permiso from '../models/permiso.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nombre_permiso } = req.body
    const permiso = await Permiso.create({
      nombre_permiso
    });
    res.status(201).json(permiso);
  } catch (error) {
    console.log("Error al crear el nuevo permiso", error)
    res.status(500).json({ error: "Error al crear el nuevo permiso"});
  }
});

router.get('/', async (req, res) => {
  try {
    const permisos = await Permiso.findAll();
    res.json(permisos);
  } catch (error) {
    console.log("Error al buscar todos los permisos", error)
    res.status(404).json({ error: "Error al buscar todos los permisos"})
  }
});

router.put('/:id', async (req, res) => {
  try {
    const permiso = await Permiso.findByPk(req.params.id);
    if (!permiso) return res.status(404).json({ error: 'Permiso no encontrado' });
    await permiso.update(req.body);
    res.json(permiso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const permiso = await Permiso.findByPk(req.params.id);
    if (!permiso) return res.status(404).json({ error: 'Permiso no encontrado' });
    await permiso.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Error al eliminar el permiso.", error);
    res.status(500).json({ error : "Error el eliminar el permiso"})
  }
});

export default router