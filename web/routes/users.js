var express = require('express');
var router = express.Router();

var card = { id: "1", name: "Coffee Cup", type: "prepaid", balance: "3000", point: "5000"}

var cardList = {
  cards: [
    {
      key: "1",
      name: "Coffee Cup",
      type: "prepaid"
    },{
      key: "2",
      name: "Wine Studio",
      type: "prepaid"
    }
  ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cards', function(req, res, next) {
  res.json(cardList);
});

router.get('/card/:id', function(req, res, next) {
  res.json(card);
});

module.exports = router;
