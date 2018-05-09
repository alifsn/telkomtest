const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  description: String,
  color: String,
  price: Number
});

const Items = mongoose.model('Item', itemSchema);

module.exports = {
  Items
};
