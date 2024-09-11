import express from 'express';
import Torneo from '../models/torneo.js';
import authorize from '../middleware/authorize.js';

const router = express.Router();

router.post('/', authorize([1]), async (req, res) => {
  try {
    const { nombre_torneo, fecha_inicio, fecha_final, id_federacion } = req.body;
    const nuevoTorneo = await Torneo.create({ nombre_torneo, fecha_inicio, fecha_final, id_federacion });
    res.status(201).json(nuevoTorneo);
  } catch (error) {
    console.log("Error al crear torneo", error);
    res.status(500).json({ error: "Error al crear torneo" });
  }
});

router.get('/', async (req, res) => {
  try {
    const torneos = await Torneo.findAll();
    res.json(torneos);
  } catch (error) {
    console.log("Error al buscar todos los torneos", error);
    res.status(500).json({ error: "Error al buscar todos los torneos" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const torneo = await Torneo.findByPk(req.params.id);
    torneo ? res.json(torneo) : res.status(404).json({ error: "Torneo no encontrado" });
  } catch (error) {
    console.log("Error al buscar torneo", error);
    res.status(500).json({ error: "Error al buscar torneo" });
  }
});

router.put('/:id', authorize([1]), async (req, res) => {
  try {
    const torneo = await Torneo.findByPk(req.params.id);
    if (!torneo) return res.status(404).json({ error: "Torneo no encontrado" });
    await torneo.update(req.body);
    res.json(torneo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', authorize([1]), async (req, res) => {
  try {
    const torneo = await Torneo.findByPk(req.params.id);
    if (!torneo) return res.status(404).json({ error: "Torneo no encontrado" });
    await torneo.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Error al eliminar torneo", error);
    res.status(500).json({ error: "Error al eliminar torneo" });
  }
});

export default router;
