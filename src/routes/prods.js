// // getData.js
const { products } = require('./products');
//
// const getAllProduct = {
//     method: 'GET',
//     path: '/products',
//     handler: (req, res) => {
//         return products;
//     }
// };
//
// module.exports = getAllProduct;
// getData.js
const express = require('express');
const router = express.Router();

// Define your middleware function
const getIdProducts = (req, res, next) => {
    // Your logic here to retrieve all products
    const categoryId = req.params.categoryId;
    console.log(categoryId);
  res.send(products.find(data => data.categoryId===categoryId));
  //res.send(products);
};

module.exports = getIdProducts;
