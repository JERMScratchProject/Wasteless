const models = require('./FoodModel');

const FoodController = {};

FoodController.getFood = (req, res, next) => {
  models.Food.find({})
    .then((data) => {
      res.locals.food = data;
      return next();
    })
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
    item,
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

FoodController.deleteFood = (req, res, next) => {
  // gets all info/data from the one food item
  models.Food.deleteOne({ item: req.params.item }).catch((err) =>
    next({
      log: `Food.deleteFood: ERROR: ${err}`,
      message: {
        err: 'Error occurred in Food.deleteFood. Check server logs for more details.',
      },
    })
  );
};

// update status to purchased
FoodController.updateFoodStatus = (req, res, next) => {
  models.Food.findOneAndUpdate({ item: req.params.item }, { $set: { status: 'purchased' } }).catch(
    (err) =>
      next({
        log: `Food.updateFoodStatus: ERROR: ${err}`,
        message: {
          err: 'Error occurred in Food.updateFoodStatus. Check server logs for more details.',
        },
      })
  );
};

// find food with status of purchased
FoodController.getPurchasedFood = (req, res, next) => {
  models.Food.find({ status: 'purchased' })
    .then((data) => {
      res.locals.purchased = data;
      return next();
    })
    .catch((err) =>
      next({
        log: `Food.getPurchasedFood: ERROR: ${err}`,
        message: {
          err: 'Error occurred in Food.getPurchasedFood. Check server logs for more details.',
        },
      })
    );
};

// update outcome to eaten
FoodController.updateEaten = (req, res, next) => {
  models.Food.findOneAndUpdate({ item: req.params.item }, { $set: { outcome: 'eaten' } }).catch(
    (err) =>
      next({
        log: `Food.updateEaten: ERROR: ${err}`,
        message: {
          err: 'Error occurred in Food.updateEaten. Check server logs for more details.',
        },
      })
  );
};

// find food with outcome of eaten
FoodController.getEatenFood = (req, res, next) => {
  models.Food.find({ status: 'eaten' })
    .then((data) => {
      res.locals.eaten = data;
      return next();
    })
    .catch((err) =>
      next({
        log: `Food.getEatenFood: ERROR: ${err}`,
        message: {
          err: 'Error occurred in Food.getEatenFood. Check server logs for more details.',
        },
      })
    );
};

// update outcome to disposed
FoodController.updateDisposed = (req, res, next) => {
  models.Food.findOneAndUpdate({ item: req.params.item }, { $set: { outcome: 'disposed' } }).catch(
    (err) =>
      next({
        log: `Food.updateDisposed: ERROR: ${err}`,
        message: {
          err: 'Error occurred in Food.updateDisposed. Check server logs for more details.',
        },
      })
  );
};

// find food with outcome of disposed
FoodController.getDisposedFood = (req, res, next) => {
  models.Food.find({ status: 'disposed' })
    .then((data) => {
      res.locals.disposed = data;
      return next();
    })
    .catch((err) =>
      next({
        log: `Food.getDisposedFood: ERROR: ${err}`,
        message: {
          err: 'Error occurred in Food.getDisposedFood. Check server logs for more details.',
        },
      })
    );
};

module.exports = FoodController;
