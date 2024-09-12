import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear un nuevo token JWT
const token = jwt.sign({ userId: 123 }, process.env.JWT_SECRET, { expiresIn: '1h' });

// Imprimir el token generado
console.log('Nuevo token JWT:', token);
