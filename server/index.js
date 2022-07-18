// index.js
// This is our main server file

// include express
const express = require("express");


// gets data out of HTTP request body 
// and attaches it to the request object
const bodyParser = require('body-parser');

// Import node implementation of fetch API -- we do this so our server has the power to fetch!
const fetch = require("cross-fetch");
// const fetch = require("node-fetch");

const PORT = process.env.PORT || 3001;

// create object to interface with express
const app = express();

// Code in this section sets up an express pipeline

// print info about incoming HTTP request 
// for debugging
app.use(function(req, res, next) {
  console.log(req.method,req.url);
  next();
})

// Get JSON out of HTTP request body, JSON.parse, and put object into req.body
app.use(bodyParser.json());

// No static server or /public because this server
// is only for AJAX requests

// respond to all AJAX querires with this message
app.use(function(req, res, next) {
  // This line was causing a lot of errors; changed 'req' to 'res'
  res.json({msg: "Hello World!"})
});

// end of pipeline specification

// Now listen for HTTP requests
// it's an event listener on the server!
const listener = app.listen(PORT, function () {
  console.log("The static server is listening on port " + listener.address().port);
});

