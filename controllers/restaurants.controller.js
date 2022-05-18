// Models
const { Restaurant } = require('../models/restaurant.model');
const { Review } = require('../models/review.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const createRestaurant = catchAsync(async (req, res, next) => {
  const { name, address, rating } = req.body;

  const newRestaurant = await Restaurant.create({ name, address, rating });

  res.status(201).json({
    status: 'New restaurant created',
    newRestaurant,
  });
});

const getAllRestaurants = catchAsync(async (req, res, next) => {
  const restaurants = await Restaurant.findAll({
    where: { status: 'active' },
    include: [
      { model: Review, attributes: ['id', 'comment', 'rating', 'userId'] },
    ],
  });

  res.status(200).json({
    status: 'All restaurants retrieved',
    restaurants,
  });
});

const getRestaurantById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const restaurant = await Restaurant.findOne({
    where: { id, status: 'active' },
    include: [
      { model: Review, attributes: ['id', 'comment', 'rating', 'userId'] },
    ],
  });

  res.status(200).json({
    status: 'Restaurant retrieved',
    restaurant,
  });
});

const updateRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;

  const { name, address } = req.body;

  await restaurant.update({ name, address });

  res.status(200).json({
    status: 'Restaurant updated',
    restaurant,
  });
});

const deleteRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;

  await restaurant.update({ status: 'deleted' });

  res.status(200).json({
    status: 'Restaurant deleted',
    restaurant,
  });
});

const createRestaurantReview = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const { restaurant } = req;

  const { rating, comment } = req.body;

  const newReview = await Review.create({
    comment,
    rating,
    restaurantId: restaurant.id,
    userId: sessionUser.id,
  });

  await restaurant.addReview(newReview);

  res.status(201).json({
    status: 'New review created',
    newReview,
  });
});

const updateRestaurantReview = catchAsync(async (req, res, next) => {});

const deleteRestaurantReview = catchAsync(async (req, res, next) => {});

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  createRestaurantReview,
  updateRestaurantReview,
  deleteRestaurantReview,
};
