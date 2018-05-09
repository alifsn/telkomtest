const router = require('express').Router();
const {
  listItems,
  addItem,
  deleteItem
} = require('../controllers/items.controller');

router.get('/', listItems);
router.post('/add', addItem);
router.delete('/:itemId', deleteItem);

module.exports = router;
