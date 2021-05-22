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
  item: { type: String, default: ''},
  type: { type: String, default: '' },
  quantity: { type: Number, default: 0 }, 
  date: { type: Date, default: Date.now() },
  price: { type: Number, default: 0 },
  expiration: { type: Date, default: Date.now() + 12096e5 },
  status: { type: String, default: 'to buy' },
  preference: { type: String, default: ''},
  outcome: { type: String, default: ''},
});

const Food = mongoose.model('food', foodSchema,'food');

module.exports = {
  Food,
};
