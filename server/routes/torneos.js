
import express from 'express';
import Torneo from '../models/torneo.js';
import authorize from '../middleware/authorize.js';

const router = express.Router();

// Asumiendo que los permisos para CRUD torneos tienen el ID 1
router.post('/torneos', authorize([1]), async (req, res) => {
  // Código para crear torneo
});

router.put('/torneos/:id', authorize([1]), async (req, res) => {
  // Código para actualizar torneo
});

router.delete('/torneos/:id', authorize([1]), async (req, res) => {
  // Código para eliminar torneo
});

export default router;
