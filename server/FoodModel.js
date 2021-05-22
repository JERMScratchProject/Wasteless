const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://eileenlee115:codesmith@cluster0.jviqy.mongodb.net/scratch-project?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'scratch-project',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const foodSchema = new Schema({
  item: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  expiration: { type: Date, required: true },
  status: { type: String, required: true },
  preference: { type: String, required: true },
  outcome: { type: String, required: true },
});

const Food = mongoose.model('food', foodSchema, 'food');

module.exports = {
  Food,
};
