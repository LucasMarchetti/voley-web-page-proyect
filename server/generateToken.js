import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Crear un nuevo token JWT
const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, { expiresIn: '24h' });

console.log('Nuevo token JWT:', token);
