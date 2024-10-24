import express from 'express';
import Federacion from '../models/federacion.js';
import authorize from '../middlewares/authorize.js';

const router = express.Router();

router.post('/', authorize([1, 2]), async (req, res) => {
    try {
        const { nombre_federacion } = req.body;
        const nuevaFederacion = await Federacion.create({
            nombre_federacion
        })
        res.status(201).json(nuevaFederacion)
    } catch (error) {
        console.log("Error al crear nueva federacion", error)
        res.status(500).json({ error: "Error al crear nueva federacion"})
    }
})

router.get('/', async (req, res) => {
    try {
        const federaciones = await Federacion.findAll()
        res.json(federaciones)
    } catch (error) {
        console.log("Error al buscar todas las federaciones", error)
        res.status(500).json({ error: "Error al buscar todas las federaciones"})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const federacion = await Federacion.findByPk(req.params.id)
        federacion ? res.status(201).json(federacion) : res.status(404).json({ error: "Error, no se encuentra la federacion."})
    } catch (error) {
        console.log("Error al buscar la federacion", error)
        res.status(500).json({ error: "Error al buscar la federacion"})
    }
})

router.delete('/:id', authorize([1,2]), async (req, res) => {
    try {
        const idFederacion = req.params.id
        const federacion = await Federacion.findByPk(idFederacion)
  
        federacion ? 
        await federacion.destroy() && res.status(201).json({ message: 'federacion eliminado correctamente' }) : 
        res.status(404).json({ error: 'federacion no encontrado' })
        
    } catch (error) {
        console.error("Error al eliminar el federacion.", error);
        res.status(500).json({ error : "Error el eliminar el federacion"})
    }
})

export default router;
