const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController');


// Define las rutas
router.get('/', getAllUsers); // Obtener todos los usuarios
router.post('/', createUser); // Crear un usuario

module.exports = router;
