const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./database');

// Import routes
const routes = require('./routes/index');

// Enable CORS for all routes
const corsOptions = {
  origin: 'http://localhost:4200', // Your Angular app's origin
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
db.connect()
  .then(() => {
    console.log('Database connected successfully');

    // Register routes with the Express application
    app.use('/', routes);

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });
