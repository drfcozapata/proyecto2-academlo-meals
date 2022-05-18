const express = require('express');
const rateLimit = require('express-rate-limit');

// Controllers
const { globalErrorsHandler } = require('./controllers/errors.controller');

// Routers
const { mealsRouter } = require('./routes/meals.route');
const { ordersRouter } = require('./routes/orders.route');
const { restaurantsRouter } = require('./routes/restaurants.route');
const { usersRouter } = require('./routes/users.route');

// Init Express app
const app = express();

// Enable incoming JSON data
app.use(express.json());

// Rate limit
const limiter = rateLimit({
  windowMs: 1 * 60 * 60 * 1000, // 1 hour
  max: 10000,
  message: 'Too many requests from this IP address',
});
app.use(limiter);

// Endpoints
app.use('/api/v1/meals', mealsRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/restaurants', restaurantsRouter);
app.use('/api/v1/users', usersRouter);

// Global error handler
app.use('*', globalErrorsHandler);

module.exports = { app };
