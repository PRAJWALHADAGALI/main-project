const mysql = require('mysql2/promise'); // Use promise-based mysql2

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Prajwal@123',
  database: 'productData',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const db = {
  connect: () => connection.getConnection(),
  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues)
        .then(([results, fields]) => resolve({ results, fields }))
        .catch(error => reject(error));
    }),
  end: () => connection.end()
};

module.exports = db;
