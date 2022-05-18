// Models
const Review = require('../models/review.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appErrors');

const reviewExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const review = await Review.findOne({
    where: { id, status: 'active' },
  });

  if (!review) {
    return next(new AppError('Review not found', 404));
  }

  next();
});

module.exports = { reviewExists };
