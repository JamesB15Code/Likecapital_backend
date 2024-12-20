const connection = require('../config/db');

// Obtiene todos los usuarios
const obtenerUsuarios = (callback) => {
  connection.query('SELECT * FROM users', callback);
};

const login = (email, password, callback) => {
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(query, [email, password], (err, results) => {
      if (err) return callback(err, null);
  
      // Si no se encuentra el usuario, devuelve null
      if (results.length === 0) {
        return callback(null, null);
      }
  
      // Devuelve el usuario encontrado
      callback(null, results[0]);
    });
  };
  
  module.exports = {
    obtenerUsuarios,
    login,
  };