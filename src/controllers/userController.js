const userModel = require('../models/userModel');

const getAllUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
};

const createUser = (req, res) => {
  userModel.createUser(req.body, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al crear usuario' });
    }
    res.status(201).json({ id: results.insertId, ...req.body });
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
