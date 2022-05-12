const express = require('express');

// Controllers
const {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require('../controllers/orders.controller');

const router = express.Router();

router.post('/', createOrder);
router.get('/me', getAllOrders);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = { ordersRouter: router };
