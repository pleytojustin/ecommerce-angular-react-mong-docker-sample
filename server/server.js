const express = require('express');

const bodyParser = require('body-parser');

// create express app
const app = express();


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Require Product routes
require('./app/routes/product.routes.js')(app);
require('./app/routes/cart.routes.js')(app);


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Hello World"});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});