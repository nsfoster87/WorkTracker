const express = require('express');
const app = express();
const pool = require('../db/index.js');
const bodyParser = require('body-parser');

const { addNewUser, loginUser } = require('./controllers/authController');

app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.post('/signup', addNewUser);
app.post('/login', loginUser);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});