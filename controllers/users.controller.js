const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Models
const { User } = require('../models/user.model');
const { Order } = require('../models/order.model');
const { Meal } = require('../models/meal.model');
const { Restaurant } = require('../models/restaurant.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appErrors');

dotenv.config((path = './config.env'));

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  res.status(200).json({
    users,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Encript password
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });
  newUser.password = undefined;

  res.status(201).json({
    status: 'success',
    newUser,
  });
});

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

const updateUser = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { name, email } = req.body;

  // Update user
  await user.update({
    name,
    email,
  });

  res.status(200).json({
    status: 'User successfully updated',
    data: {
      user,
    },
  });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  // Update user
  await user.update({
    status: 'deleted',
  });

  res.status(200).json({
    status: 'User successfully deleted',
  });
});

const getUserOrders = catchAsync(async (req, res, next) => {
  const { user } = req;

  // Get orders
  const orders = await Order.findAll({
    where: {
      userId: user.id,
    },
    include: [
      {
        model: Meal,
        attributes: ['id', 'name', 'price'],
        include: [{ model: Restaurant, attributes: ['id', 'name'] }],
      },
    ],
  });

  res.status(200).json({
    status: 'success',
    orders,
  });
});

const getUserOrderById = catchAsync(async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;

  // Get order
  const order = await Order.findOne({
    where: {
      userId: user.id,
      id,
    },
    include: [
      {
        model: Meal,
        attributes: ['id', 'name', 'price'],
        include: [{ model: Restaurant, attributes: ['id', 'name'] }],
      },
    ],
  });

  res.status(200).json({
    status: 'success',
    order,
  });
});

const checkToken = catchAsync(async (req, res, next) => {
  res.status(200).json({ user: req.sessionUser });
});

module.exports = {
  checkToken,
  createUser,
  deleteUser,
  getAllUsers,
  getUserOrders,
  getUserOrderById,
  loginUser,
  updateUser,
};
