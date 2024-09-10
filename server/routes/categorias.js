import express from 'express'
import Categoria from '../models/categoria.js'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { nombre_categoria, abreviacion } = req.body
        const nuevaCategoria = await Categoria.create({
            nombre_categoria,
            abreviacion
        })
        res.status(201).json(nuevaCategoria)
    } catch (error) {
        console.log("Error al crear una nueva categoria", error)
        res.status(500).json({ error: "Error al crear una nueva categoria"})
    }
})

router.get('/', async (req, res) => {
    try {
        const categorias = await Categoria.findAll()
        res.status(201).json(categorias)
    } catch (error) {
        console.log("Error al buscar todas las categorias", error)
        res.status(500).json({ error: "Error al buscar todas las categorias"})
    }
})

export default router