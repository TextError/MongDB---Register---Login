const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// Use Routes
const users = require('./routes/api/user');


const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DataBase Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use('/api/users', users);



// Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));