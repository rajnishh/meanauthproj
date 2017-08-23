const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const mongoose = require('mongoose');
const config = require('./config/database')

//Connected To Database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Database Error '+err);
});

const app = express();

const users = require('./routes/users');

//port number
const port = 3000;
//CORS Middleware
app.use(cors());

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index routes
app.get('/', (req, res) => {
  res.send('Invalid Endpoints');
});

//Start server
app.listen(port, () => {
  console.log('Server started on port ' +port);
})
