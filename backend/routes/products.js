const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: "Robe Shema Gold", price: 120 },
  { id: 2, name: "Ensemble Royal", price: 150 }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
