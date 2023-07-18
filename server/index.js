const express = require('express');
const app = express();
const pool = require('../db/index.js');

app.use(express.static('./client/dist'));

// app.post('/signup', addNewUser); // addNewUser not yet implemented
// app.post('/login', loginUser);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});