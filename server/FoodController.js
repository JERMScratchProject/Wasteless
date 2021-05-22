const models = require('./FoodModel');

const FoodController = {};

FoodController.getFood = (req, res, next) => {
  // gets all info/data from the one food item
  models.Food.find({})
    .then((data) => {
      // storing the data in key called food in res.locals
      console.log(data);
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

FoodController.addFood = (req, res, next) => {
  const { item } = req.body;
  // , type, quantity, date, price, expiration, status, preference, outcome 
  models.Food.create({
    item
    // type,
    // quantity,
    // date,
    // price,
    // expiration,
    // status,
    // preference,
    // outcome,
  })
    .then((data) => {
      console.log('got to here');
      res.locals.food = data;
      // console.log(res.locals.food);
      return next();
    })
    .catch((err) =>
      next({
        log: `FoodController.addFood: ERROR: ${err}`,
        message: {
          err: 'Error occurred in FoodController.addFood. Check server logs for more details.',
        },
      })
    );
};

// find items by id of which food item user bought
// has status of to buy and update their status

// FoodController.updateStatus.findOneAndUpdate({ status: 'purchased' });

module.exports = FoodController;
