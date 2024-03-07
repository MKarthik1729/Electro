

// Patches
const {inject, errorHandler} = require('express-custom-error');
inject(); 

// Require Dependencies

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const mongooseConnection = require('./models/database.js');


const logger = require('./util/logger');


// const { PORT } = process.env;
const PORT = 4000

// Instantiate an Express Application
const app = express();
app.use(express.json( { limit: '50mb' } ));
app.use(express.urlencoded( { extended: true, limit: '10mb' } ));

console.log(PORT)
// Configure custom logger middleware
app.use(logger.dev, logger.combined);
app.use(cookieParser());
app.use(cors());

// This middleware adds the json header to every response
app.use('*', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
})
// Assign Routes
app.use('/admin', require('./routes/admin.js'));
app.use('/users', require('./routes/users.js'));
app.use('/vendor', require('./routes/vendor.js'))
// Handle errors
app.use(errorHandler());

app.use('*', (req, res) => {
    res
    .status(404)
    .json( {status: false, message: 'Endpoint Not Found'} );
})


mongooseConnection.then(() => {
    // Start your server or perform any other actions here
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });