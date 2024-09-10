import express from 'express'
import Equipo from '../models/equipo.js'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { nombre_equipo, logo_equipo } = req.body
        const nuevoEquipo = await Equipo.create({
            nombre_equipo,
            logo_equipo
        })
        res.status(201).json(nuevoEquipo)
    } catch (error) {
        console.log("Error al crear el nuevo equipo", error)
        res.status(500).json({ error: "Error al crear el nuevo equipo"})
    }
})


router.get('/', async (req, res) => {
    try {
        const equipos = await Equipo.findAll()
        res.status(201).json(equipos)
    } catch (error) {
        console.log("Error al buscar todos los equipos", error)
        res.status(500).json({ error: "Error al buscar todos los equipos"})
    }
})

export default router