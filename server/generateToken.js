import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Crear un nuevo token JWT

const token = jwt.sign({ userId: 5 }, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log('Nuevo token JWT:', token);

