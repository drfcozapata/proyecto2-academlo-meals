// Models
const Meal = require('../models/meal.model');

// Utils
const { CatchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appErrors');

const mealExists = catchAsync(async (req, res, next) => {});

module.exports = { mealExists };
