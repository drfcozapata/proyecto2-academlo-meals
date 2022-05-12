const express = require('express');

// Controllers
const {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  createRestaurantReview,
  updateRestaurantReview,
  deleteRestaurantReview,
} = require('../controllers/restaurants.controller');

const router = express.Router();

router.post('/', createRestaurant);
router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.patch('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);
router.post('/reviews/:id', createRestaurantReview);
router.patch('/reviews/:id', updateRestaurantReview);
router.delete('/reviews/:id', deleteRestaurantReview);

module.exports = { restaurantsRouter: router };
