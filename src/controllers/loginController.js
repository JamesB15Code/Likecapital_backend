const loginModel = require('../models/loginModel')
const jwt = require('jsonwebtoken'); // Importa jsonwebtoken
require('dotenv').config(); // Para acceder a las variables de entorno

const obtenerUsuarios = (req, res) => {
  loginModel.obtenerUsuarios((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  // Verifica que email y password existan
  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }

  // Llama al modelo para verificar las credenciales
  loginModel.login(email, password, (err, user) => {
    if (err) {
      console.error('Error en el login:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Generar el JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email }, // Carga útil
      process.env.JWT_SECRET_KEY, // La clave secreta desde las variables de entorno
      { expiresIn: '3m' } // Expiración del token (3min en este caso)
    );

    // Responder con el token
    res.json({
      message: 'Inicio de sesión exitoso',
      token, // Incluye el token en la respuesta
    });

  });
};

module.exports = {
  obtenerUsuarios,
  login,
};