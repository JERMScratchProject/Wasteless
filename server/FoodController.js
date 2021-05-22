const models = require('./FoodModel');

const FoodController = {};

FoodController.getFood = (req, res, next) => {
  // gets all info/data from the one food item
  models.Food.find({})
    .then((data) => {
      // storing the data in key called food in res.locals
      // console.log(data);
      res.locals.food = data;
      return next();
    })
    // for catching errors
    .catch((err) =>
      next({
        log: `Food.getFood: ERROR: ${err}`,
        message: {
          err: 'Error occurred in Food.getFood. Check server logs for more details.',
        },
      })
    );
};

module.exports = FoodController;
