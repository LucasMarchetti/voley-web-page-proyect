const { Pool } = require('pg');
const pool = new Pool(require('../config/dbConfig'));

exports.findAll = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};