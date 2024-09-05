import pool from './config/dbConfig.js';

const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Conexión exitosa:', result.rows[0]);
  } catch (error) {
    console.error('Error de conexión:', error.stack);
  } finally {
    await pool.end();
  }
};

testConnection();