// Models
const Restaurant = require('../models/restaurant.model');
const Review = require('../models/review.model');
const Meal = require('../models/meal.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const createRestaurant = catchAsync(async (req, res, next) => {});

const getAllRestaurants = catchAsync(async (req, res, next) => {});

const getRestaurantById = catchAsync(async (req, res, next) => {});

const updateRestaurant = catchAsync(async (req, res, next) => {});

const deleteRestaurant = catchAsync(async (req, res, next) => {});

const createRestaurantReview = catchAsync(async (req, res, next) => {});

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
