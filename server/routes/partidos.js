import express from 'express'
import Partido from '../models/partido.js'
import authorize from '../middlewares/authorize.js';


const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const partido = await Partido.create(req.body)
    res.status(201).json(partido)
  } catch (error) {
    console.log("Error al crear partido", error)
    res.status(500).json({ error: "Error al crear partido" })
  }
})

router.get('/filter',  async (req, res) => {
  const { id_torneo, id_categoria } = req.query
  if (!id_torneo || !id_categoria || isNaN(id_torneo) || isNaN(id_categoria)) {
    return res.status(400).json({ error: 'Faltan parámetros o los parámetros son inválidos' })
  }
  try {
    const partidos = await Partido.findAll({
      where: {
        id_torneo: Number(id_torneo),
        id_categoria: Number(id_categoria),
      },
    })
    res.status(200).json(partidos)
  } catch (error) {
    console.log("Error al buscar partidos filtrados", error)
    res.status(500).json({ error: "Error al buscar partidos filtrados" })
  }
})

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
