import express from 'express'
import Categoria from '../models/categoria.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router()

router.post('/', authorize([1, 2]), async (req, res) => {
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

router.get('/:id', async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id)
        categoria ? res.status(201).json(categoria) : res.status(404).json({ error: "Error, no se encuentra la categoria."})
    } catch (error) {
        console.log("Error al buscar la categoria", error)
        res.status(500).json({ error: "Error al buscar la categoria"})
    }
})

router.put('/:id', authorize([1, 2]), async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id)
        if(!categoria) return res.status(404).json({ error: "No se encontró la categoria"})
        await categoria.update(req.body)
        res.status(201).json(categoria)
    } catch (error) {
        console.log("error al actualizar la categoria", error)
        res.status(500).json({ error: "Error al actualizar la categoria"})
    }
})

router.delete('/:id', authorize([1,2]), async (req, res) => {
    try {
        const idCategoria = req.params.id
        const categoria = await Categoria.findByPk(idCategoria)
  
        categoria ? 
        await categoria.destroy() && res.status(201).json({ message: 'categoria eliminado correctamente' }) : 
        res.status(404).json({ error: 'categoria no encontrado' })
        
    } catch (error) {
        console.error("Error al eliminar el categoria.", error);
        res.status(500).json({ error : "Error el eliminar el categoria"})
    }
  })

export default router