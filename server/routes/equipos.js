import express from 'express'
import Equipo from '../models/equipo.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.post('/', authorize([1, 2]) ,async (req, res) => {
    try {
        const { nombre_equipo, logo_equipo, id_federacion } = req.body
        const nuevoEquipo = await Equipo.create({
            nombre_equipo,
            logo_equipo,
            id_federacion
        })
        res.status(201).json(nuevoEquipo)
    } catch (error) {
        console.log("Error al crear el nuevo equipo", error)
        res.status(500).json({ error: "Error al crear el nuevo equipo"})
    }
})

router.get('/', async (req, res) => {
    const { id_federacion } = req.query;
    if (!id_federacion || isNaN(id_federacion)) {
        return res.status(400).json({ error: 'Falta el parámetro id_federacion' });
    }
    try {
        const equipos = await Equipo.findAll({
            where: {
                id_federacion: id_federacion
            }
        })
        res.status(200).json(equipos)
    } catch (error) {
        console.log("Error al buscar todos los equipos", error)
        res.status(404).json({ error: "Error al buscar todos los equipos"})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const idEquipo = Number(req.params.id)
        if (!idEquipo || isNaN(idEquipo) || !Number.isInteger(idEquipo) || idEquipo <= 0) {
            return res.status(400).json({ error: 'El parámetro id debe ser un número entero positivo.' })
        }
        const equipo = await Equipo.findByPk(idEquipo)
        if (!equipo) {
            return res.status(404).json({ error: 'Equipo no encontrado.' })
        }
        res.status(200).json(equipo)
    } catch (error) {
        console.error("Error al buscar el equipo:", error)
        res.status(500).json({ error: 'Error interno del servidor al buscar el equipo.' })
    }
})

router.put('/:id', authorize([1, 2]), async (req, res) => {
    try {
        const idEquipo = req.params.id
        if(!idEquipo || isNaN(idEquipo)) {
            return res.status(400).json({ error: 'El parámetro id debe ser un número entero positivo.' })
        }
        const equipo = await Equipo.findByPk(idEquipo)
        await equipo.update(req.body)
        res.status(201).json(equipo)
    } catch (error) {
        console.error("Error al modificar el equipo:", error)
        res.status(500).json({ error: 'Error interno del servidor al modificar el equipo.' })
    }
})

router.delete('/:id', authorize([1, 2]), async (req, res) => {
    try {
        const idEquipo = Number(req.params.id)
        if (!idEquipo || isNaN(idEquipo) || !Number.isInteger(idEquipo) || idEquipo <= 0) {
            return res.status(400).json({ error: 'El parámetro id debe ser un número entero positivo.' })
        }
        const equipo = await Equipo.findByPk(idEquipo)
        if (!equipo) {
            return res.status(404).json({ error: 'Equipo no encontrado.' })
        }
        await equipo.destroy()
        res.status(200).json({ message: 'Equipo eliminado correctamente.' })
    } catch (error) {
        console.error("Error al eliminar el equipo:", error)
        res.status(500).json({ error: 'Error al eliminar el equipo.' })
    }
})

export default router