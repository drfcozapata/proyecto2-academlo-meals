// Models
const Order = require('../models/order.model');

// Utils
const { CatchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appErrors');

const orderExists = catchAsync(async (req, res, next) => {});

module.exports = { orderExists };
