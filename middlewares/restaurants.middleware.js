// Models
const Restaurant = require('../models/restaurant.model');

// Utils
const { CatchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appErrors');

const restaurantExists = catchAsync(async (req, res, next) => {});

module.exports = { restaurantExists };
