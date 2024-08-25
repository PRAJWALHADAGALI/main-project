
const { products } = require('./products');

const express = require('express');
const router = express.Router();

const getIdProducts = (req, res, next) => {
    const categoryId = req.params.categoryId;
    console.log(categoryId);
  res.send(products.find(data => data.categoryId===categoryId));
};
const getIdQty = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
  res.send(products.find(data => data.id===id));
};

module.exports = {
  getIdProducts,
  getIdQty
};
