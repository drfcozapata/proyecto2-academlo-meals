// Models
const Meal = require('../models/meal.model');
const Restaurant = require('../models/restaurant.model');
const Order = require('../models/order.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const createMeal = catchAsync(async (req, res, next) => {});

const getAllMeals = catchAsync(async (req, res, next) => {});

const getMealById = catchAsync(async (req, res, next) => {});

const updateMeal = catchAsync(async (req, res, next) => {});

const deleteMeal = catchAsync(async (req, res, next) => {});

module.exports = {
  createMeal,
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
};
