// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');



const app = express();
mongoose.Promise = global.Promise;
// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Horscontexte first Node.js API"});
});

// listen on port 3000
app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
});

require('./personnage.routes.js')(app);
require('./lieu.routes.js')(app);
require('./joueur.routes.js')(app);
require('./document.routes.js')(app);
// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
