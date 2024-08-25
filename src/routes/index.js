const express = require('express');
const router = express.Router();
const { getAllProducts, getProductsByCategory, getProductQty, deleteproductQty } = require('./getData');

router.get('/products', getAllProducts);

router.get('/products/category/:categoryId', getProductsByCategory);

router.get('/products/get-qty/:id', getProductQty);

router.put('/products/delete-qty/:id',deleteproductQty);
module.exports = router;
