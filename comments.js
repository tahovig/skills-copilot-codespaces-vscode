// Create web server application
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create a web server application
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Create a route for the server
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Create a route for the server
app.get('/comments', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(4001, () => {
  console.log('Server is running on port 4001');
});