// Models
const Meal = require('../models/meal.model');
const Order = require('../models/order.model');
const User = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const createOrder = catchAsync(async (req, res, next) => {});

const getAllOrders = catchAsync(async (req, res, next) => {});

const updateOrder = catchAsync(async (req, res, next) => {});

const deleteOrder = catchAsync(async (req, res, next) => {});

module.exports = { createOrder, getAllOrders, updateOrder, deleteOrder };
