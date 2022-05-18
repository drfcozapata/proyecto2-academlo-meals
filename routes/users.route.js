const express = require('express');

// Middlewares
const {
  protectAccountOwner,
  protectAdmin,
  protectToken,
  userExists,
} = require('../middlewares/users.middleware');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middleware');

// Controllers
const {
  checkToken,
  createUser,
  deleteUser,
  getAllUsers,
  getUserOrders,
  getUserOrderById,
  loginUser,
  updateUser,
} = require('../controllers/users.controller');

const router = express.Router();

router.post('/signup', createUserValidations, checkValidations, createUser);
router.post('/login', loginUser);

router.use(protectToken);
router.get('/check-token', checkToken);

router.get('/', protectAdmin, getAllUsers);
router.patch('/:id', userExists, protectAccountOwner, updateUser);
router.delete('/:id', userExists, protectAccountOwner, deleteUser);
router.get('/orders', getUserOrders);
router.get('/orders/:id', getUserOrderById);

module.exports = { usersRouter: router };
