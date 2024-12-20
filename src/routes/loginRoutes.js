const express = require('express');
const router = express.Router();
const { obtenerUsuarios, login } = require('../controllers/loginController');

// Define las rutas
router.get('/login', obtenerUsuarios);
router.post('/login', login);


module.exports = router;