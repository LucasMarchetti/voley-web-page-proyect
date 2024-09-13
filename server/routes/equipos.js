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
    if (!id_federacion) {
        return res.status(400).json({ error: 'Falta el parámetro id_federacion' });
    }
    try {
        const equipos = await Equipo.findAll({
            where: {
                id_federacion: id_federacion  // Filtra por id_federacion
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
        const idEquipo = req.params.id
        const equipo = await Equipo.findByPk(idEquipo)
        equipo ? res.status(200).json(equipo) : res.status(404).json({ error: "Error, equipo no encontrado" })
    } catch (error) {
       console.log("error, equipo no encontrado", error)
       res.status(500).json({ error : "Error, equipo no encontrado"}) 
    }
})

router.delete('/:id', authorize([1, 2]), async (req, res) => {
    try {
        const idEquipo = req.params.id
        const equipo = await Equipo.findByPk(idEquipo)

        equipo ? 
        await equipo.destroy() && res.status(200).json({ message: 'Equipo eliminado correctamente' }) : 
        res.status(404).json({ error: 'Equipo no encontrado' })
        
    } catch (error) {
        console.error("Error al eliminar el equipo.", error);
        res.status(500).json({ error : "Error el eliminar el equipo"})
    }
})

export default router