const connection = require('../config/db');

// Obtiene todos los usuarios
const getAllUsers = (callback) => {
  connection.query('SELECT * FROM users', callback);
};

// Agrega un usuario
const createUser = (userData, callback) => {
  const { name, email, password } = userData;
  connection.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    callback
  );
};

module.exports = {
  getAllUsers,
  createUser,
};
