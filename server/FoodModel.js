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
  item: { type: String },
  type: { type: String },
  quantity: { type: Number },
  date: { type: Date },
  price: { type: Number },
  expiration: { type: Date },
  status: { type: String },
  preference: { type: String },
  outcome: { type: String },
});

const Food = mongoose.model('food', foodSchema);

module.exports = {
  Food,
};
