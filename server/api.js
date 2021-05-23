const express = require('express');

const FoodController = require('./FoodController');

const router = express.Router();

router.get('/', FoodController.getFood, (req, res) => {
  // sends data to frontend
  res.status(200).json(res.locals.food);
  // console.log(res.locals.food);
});

router.post('/food', FoodController.addFood, (req, res) => res.status(200).json(res.locals.food));

router.delete('/food/:id', FoodController.deleteFood, (req, res) =>
  res.status(200).json({ message: 'deleted' })
);

module.exports = router;
