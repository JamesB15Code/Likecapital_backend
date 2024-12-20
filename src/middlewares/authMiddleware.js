const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Obtén el token del header Authorization

  if (!token) {
    return res.status(403).json({ message: 'No se proporcionó un token' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }
    
    req.user = decoded; // Puedes añadir el usuario decodificado a la solicitud
    next(); // Continúa con la ejecución de la siguiente función o ruta
  });
};

module.exports = verificarToken;
