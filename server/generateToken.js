import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Crear un nuevo token JWT
<<<<<<< HEAD
const token = jwt.sign({ userId: 5 }, process.env.JWT_SECRET, { expiresIn: '1h' });
=======
const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, { expiresIn: '24h' });
>>>>>>> e31304ffa849733e0ba6679b19ea67db4edf4051

console.log('Nuevo token JWT:', token);

