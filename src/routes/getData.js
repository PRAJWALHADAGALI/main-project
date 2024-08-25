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

const getProductQty = async (req, res) => {
  try {
    const id = req.params.id;
    const { results } = await db.query('SELECT qty FROM products WHERE id = ?', [id]);
    res.send(results);
  } catch (error) {
    console.error('Error fetching product qty:', error);
    res.status(500).send('Error fetching product qty');
  }
};

const deleteproductQty = async (req, res) => {
  try {
    const id = req.params.id;
    const qtyToDelete = req.query.qty;
    const { results } = await db.query('UPDATE products SET qty = qty - ? WHERE id = ?', [qtyToDelete, id]);
    res.send(results);
  } catch (error) {
    console.error('Error deleting product qty', error);
    res.status(500).send('Error deleting product qty');
  }
};


module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProductQty,
  deleteproductQty,
};
