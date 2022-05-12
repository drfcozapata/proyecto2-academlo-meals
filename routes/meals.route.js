const express = require('express');

// Controllers
const {
  createMeal,
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal,
} = require('../controllers/meals.controller');

const router = express.Router();

router.post('/:id', createMeal);
router.get('/', getAllMeals);
router.get('/:id', getMealById);
router.patch('/:id', updateMeal);
router.delete('/:id', deleteMeal);

module.exports = { mealsRouter: router };
