const express = require('express');
const cors = require('cors');
const app = express();
const port = 3300;
const db = require('./database2');

const routes = require('./userroutes/index');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

db.connect()
  .then(() => {
    console.log('Database connected successfully');

    app.use('/', routes);

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });
