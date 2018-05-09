const { Items } = require('../models/Items');

const listItems = (req, res) => {
  Items.find({}, function(err, items) {
    if (err) throw err;
    // object of all the users
    res.status(200).send(items);
  });
};

const addItem = (req, res) => {
  console.log(req.body);
  const { name, description, color, price } = req.body;
  const items = new Items();

  items.name = name;
  items.description = description;
  items.color = color;
  items.price = price;
  items.save().then(data => {
    res.status(201).json({
      message: 'data masuk'
    });
  });
};

const deleteItem = (req, res) => {
  Items.deleteOne(
    {
      _id: req.params.itemId
    },
    err => {
      if (err) {
        res.status(500).json({
          err
        });
      } else {
        res.status(201).json({
          message: 'Deleted'
        });
      }
    }
  );
};

module.exports = {
  listItems,
  addItem,
  deleteItem
};
