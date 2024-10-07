require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {PORT} = process.env;

app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('../routes/user');
app.use('/api/users', userRoutes);

app.listen((PORT || 5000), () => {
  console.log(`\nServer is running on port ${PORT}`);
});