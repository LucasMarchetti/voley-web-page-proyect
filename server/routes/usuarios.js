
import express from 'express';
import { body, validationResult } from 'express-validator';
import Usuario from '../models/usuario.js';
import UsuarioPermiso from '../models/usuarioPermiso.js';
import sequelize from '../config/dbConfig.js';
import authorize from '../middlewares/authorize.js';

const router = express.Router();

router.post('/', [
  body('nombre_usuario').notEmpty().withMessage('Nombre de usuario es obligatorio'),
  body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('id_federacion').isInt().withMessage('ID de federación debe ser un número entero'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let transaction;
  
  try {
    transaction = await sequelize.transaction();  // Inicia la transacción
    
    const { nombre_usuario, email, password, es_administrador, id_federacion } = req.body;
    
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password,
      es_administrador,
      id_federacion
    }, { transaction });

    await transaction.commit();  // Confirma la transacción
    
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    if (transaction) {
      try {
        await transaction.rollback();  // Revierte la transacción en caso de error
      } catch (rollbackError) {
        console.error("Error al revertir la transacción:", rollbackError);
      }
    }
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar todos los usuarios" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el usuario' });
  }
});

router.put('/:id', [
  body('nombre_usuario').optional().notEmpty().withMessage('Nombre de usuario no puede estar vacío'),
  body('email').optional().isEmail().withMessage('Debe ser un correo electrónico válido'),
  body('password').optional().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { permisos, ...usuarioData } = req.body;
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    await usuario.update(usuarioData);

    if (permisos) {
      await UsuarioPermiso.destroy({ where: { id_usuario: usuario.id_usuario } });
      for (const permisoId of permisos) {
        await UsuarioPermiso.create({ id_usuario: usuario.id_usuario, id_permiso: permisoId });
      }
    }

    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const idUsuario = req.params.id
      const usuario = await Usuario.findByPk(idUsuario)

      usuario ? 
      await usuario.destroy() && res.status(200).json({ message: 'usuario eliminado correctamente' }) : 
      res.status(404).json({ error: 'usuario no encontrado' })
      
  } catch (error) {
      console.error("Error al eliminar el usuario.", error);
      res.status(500).json({ error : "Error el eliminar el usuario"})
  }
})

export default router;
