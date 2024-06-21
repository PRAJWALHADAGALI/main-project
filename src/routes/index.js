const express = require('express');
const router = express.Router();
const { getAllProducts, getProductsByCategory } = require('./getData');

// Route to get all products
router.get('/products', getAllProducts);

// Route to get products by category
router.get('/products/category/:categoryId', getProductsByCategory);
module.exports = router;
