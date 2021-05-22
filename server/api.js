const express = require('express');

const FoodController = require('./FoodController');

const router = express.Router();

router.get('/', FoodController.getFood, (req, res) => {
  // sends data to frontend
  res.status(200).send(res.locals.food);
  // console.log(res.locals.food)
});

module.exports = router;
