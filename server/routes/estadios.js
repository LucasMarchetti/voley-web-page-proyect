import express from 'express'
import Estadio from '../models/estadio.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.post('/', authorize([1, 2]), async (req, res) => {
    try {
        const { nombre_estadio } = req.body
        const nuevoEstadio = await Estadio.create({
            nombre_estadio
        })
        res.status(201).json(nuevoEstadio)
    } catch (error) {
        console.log("Error al crear un nuevo estadio", error)
        res.status(500).json({ error: "Error al crear un nuevo estadio"})
    }
})

router.get('/', async (req, res) => {
    try {
        const nuevoEstadio = await Estadio.findAll()
        res.status(201).json(nuevoEstadio)
    } catch (error) {
        console.log("Error al buscar todos los estadios", error)
        res.status(500).json({ error: "Error al buscar todos los estadios"})
    }
})

router.put('/:id', authorize([1, 2]), async (req, res) => {
    try {
        const idEstadio = req.params.id
        if(!idEstadio || isNaN(idEstadio)) {
            return res.status(400).json({ error: 'El parámetro id debe ser un número entero positivo.' })
        }
        const estadio = await Estadio.findByPk(idEstadio)
        await estadio.update(req.body)
        res.status(201).json(estadio)
    } catch (error) {
        console.error("Error al modificar el estadio:", error)
        res.status(500).json({ error: 'Error interno del servidor al modificar el estadio.' })
    }
})

router.delete('/:id', authorize([1, 2]), async (req, res) => {
    try {
        const idEstadio = req.params.id
        if (!idEstadio || isNaN(idEstadio) || !Number.isInteger(idEstadio) || idEstadio <= 0) {
            return res.status(400).json({ error: 'El parámetro id debe ser un número entero positivo.' })
        }
        const estadio = await Estadio.findByPk(idEstadio)
        if (!estadio) {
            return res.status(404).json({ error: 'estadio no encontrado.' })
        }
        await equipo.destroy()
        res.status(200).json({ message: 'estadio eliminado correctamente.' })
    } catch (error) {
        console.error("Error al eliminar el estadio.", error);
        res.status(500).json({ error : "Error el eliminar el estadio"})
    }
})

export default router