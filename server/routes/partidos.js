import express from 'express';
import Partido from '../models/partido.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const partido = await Partido.create(req.body);
    res.status(201).json(partido);
  } catch (error) {
    console.log("Error al crear partido", error);
    res.status(500).json({ error: "Error al crear partido" });
  }
});

router.get('/', async (req, res) => {
  try {
    const partidos = await Partido.findAll();
    res.json(partidos);
  } catch (error) {
    console.log("Error al buscar todos los partidos", error);
    res.status(500).json({ error: "Error al buscar todos los partidos" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const partido = await Partido.findByPk(req.params.id);
    partido ? res.json(partido) : res.status(404).json({ error: "Partido no encontrado" });
  } catch (error) {
    console.log("Error al buscar partido", error);
    res.status(500).json({ error: "Error al buscar partido" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const partido = await Partido.findByPk(req.params.id);
    if (!partido) return res.status(404).json({ error: "Partido no encontrado" });
    await partido.update(req.body);
    res.json(partido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const partido = await Partido.findByPk(req.params.id);
    if (!partido) return res.status(404).json({ error: "Partido no encontrado" });
    await partido.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Error al eliminar partido", error);
    res.status(500).json({ error: "Error al eliminar partido" });
  }
});

export default router;
