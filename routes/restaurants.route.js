const express = require('express');

// Middlewares
const {
  protectAccountOwner,
  protectAdmin,
  protectToken,
} = require('../middlewares/users.middleware');
const { restaurantExists } = require('../middlewares/restaurants.middleware');
const {
  createRestaurantValidations,
  checkValidations,
} = require('../middlewares/validations.middleware');

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

router.use(protectToken);

router.post(
  '/',
  protectAdmin,
  createRestaurantValidations,
  checkValidations,
  createRestaurant
);
router.get('/', getAllRestaurants);
router.get('/:id', restaurantExists, getRestaurantById);
router.patch('/:id', protectAdmin, restaurantExists, updateRestaurant);
router.delete('/:id', protectAdmin, restaurantExists, deleteRestaurant);
router.post('/reviews/:id', restaurantExists, createRestaurantReview);
router.patch(
  '/reviews/restaurantId/:id',
  restaurantExists,
  protectAccountOwner,
  updateRestaurantReview
);
router.delete(
  '/reviews/restaurantId/:id',
  restaurantExists,
  protectAccountOwner,
  deleteRestaurantReview
);

module.exports = { restaurantsRouter: router };
