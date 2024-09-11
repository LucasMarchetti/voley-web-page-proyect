import express from 'express'
import Estadio from '../models/estadio.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.post('/', authorize([1]), async (req, res) => {
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

router.delete('/:id', authorize([1]), async (req, res) => {
    try {
        const idEstadio = req.params.id
        const estadio = await Estadio.findByPk(idEstadio)
  
        estadio ? 
        await estadio.destroy() && res.status(200).json({ message: 'estadio eliminado correctamente' }) : 
        res.status(404).json({ error: 'estadio no encontrado' })
        
    } catch (error) {
        console.error("Error al eliminar el estadio.", error);
        res.status(500).json({ error : "Error el eliminar el estadio"})
    }
  })

export default router