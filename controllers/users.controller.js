const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Models
const User = require('../models/user.model');
const Order = require('../models/order.model');
const Review = require('../models/review.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appErrors');

dotenv.config((path = './config.env'));

const createUser = catchAsync(async (req, res, next) => {});

const loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate that user exists with given email
  const user = await User.findOne({
    where: { email, status: 'active' },
  });

  //Compare password with hashed password
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Invalid credentials', 400));
  }

  // Create JWT
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  user.password = undefined;
  res.status(200).json({ token, user });
});

const updateUser = catchAsync(async (req, res, next) => {});

const deleteUser = catchAsync(async (req, res, next) => {});

const getUserOrders = catchAsync(async (req, res, next) => {});

const getUserOrderById = catchAsync(async (req, res, next) => {});

const checkToken = catchAsync(async (req, res, next) => {
  res.status(200).json({ user: req.sessionUser });
});

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserOrders,
  getUserOrderById,
  checkToken,
};
