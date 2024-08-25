const db = require('../database2');

// Fetch all users
const getAllUsers = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM user');
    res.send(results);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
};

// Add a new user
const addUser = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const [results] = await db.query(
      'INSERT INTO user (name, email, password, phone) VALUES (?, ?, ?, ?)',
      [name, email, password, phone]
    );
    res.send({ id: results.insertId, message: 'User added successfully!' });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send('Error adding user');
  }
};

// Check if a user exists by email
const getUser = async (req, res) => {
  const { email } = req.query; // Assuming you're using query parameters
  try {
    const results = await db.query(
      'SELECT EXISTS (SELECT 1 FROM user WHERE email = ?) AS emailexist',
      [email]
    );

    // Log results to understand the format
    console.log('Query Results:', results);

    // Check if results is an array and handle accordingly
    if (Array.isArray(results) && results.length > 0 && results[0].emailexist) {
      res.send({ exists: true });
    } else {
      res.send({ exists: false });
    }
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).send('Error checking user');
  }
};



module.exports = {
  getAllUsers,
  addUser,
  getUser
};
