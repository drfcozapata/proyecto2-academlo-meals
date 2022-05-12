// Models
const Review = require('../models/review.model');

// Utils
const { CatchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appErrors');

const reviewExists = catchAsync(async (req, res, next) => {});

module.exports = { reviewExists };
