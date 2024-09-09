import express from 'express';
import Federacion from '../models/federacion.js';

const router = express.Router();

//Crear nueva federacion
router.post('/', async (req, res) => {
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

//Obtener todas las federaciones
router.get('/', async (req, res) => {
    try {
        const federaciones = await Federacion.findAll()
        res.json(federaciones)
    } catch (error) {
        console.log("Error al buscar todas las federaciones", error)
        res.status(500).json({ error: "Error al buscar todas las federaciones"})
    }
})

export default router;
