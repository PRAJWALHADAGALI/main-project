const db = require('../database');

const getAllProducts = async (req, res) => {
  try {
    const { results } = await db.query('SELECT * FROM products');
    res.send(results);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { results } = await db.query('SELECT * FROM products WHERE categoryId = ?', [categoryId]);
    res.send(results);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).send('Error fetching products by category');
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategory
};
