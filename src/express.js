const express = require('express');
const cors = require('cors');
const { loaddata } = require('./user_model'); // Update with the correct path

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/users', (req, res) => {
  const jsonData = loaddata();
  if (jsonData !== null) {
    res.json(jsonData);
  } else {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => console.log('Server running...'));
