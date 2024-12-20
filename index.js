const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const app = express();
const userRoutes = require('./src/routes/userRoutes');
const loginRoutes = require('./src/routes/loginRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/api', loginRoutes);


// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
