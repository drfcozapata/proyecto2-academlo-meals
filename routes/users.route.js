const express = require('express');

// Controllers
const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserOrders,
  getUserOrderById,
  checkToken,
} = require('../controllers/users.controller');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);

router.get('/check-token', checkToken);

router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/orders', getUserOrders);
router.get('/orders/:id', getUserOrderById);

module.exports = { usersRouter: router };
