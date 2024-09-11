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

router.delete('/:id', async (req, res) => {
    try {
        const idCategoria = req.params.id
        const categoria = await Categoria.findByPk(idCategoria)
  
        categoria ? 
        await categoria.destroy() && res.status(200).json({ message: 'categoria eliminado correctamente' }) : 
        res.status(404).json({ error: 'categoria no encontrado' })
        
    } catch (error) {
        console.error("Error al eliminar el categoria.", error);
        res.status(500).json({ error : "Error el eliminar el categoria"})
    }
  })

export default router