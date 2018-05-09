const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/telkom', err => {
  if (err) {
    console.log('tidak berhasil');
  } else {
    console.log('berhasil');
  }
});

const items = require('./routes/items.routes');

app.use('/api', items);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
