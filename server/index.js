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
  res.json({"msg": "Hello World!"});
  next();
});

// POST Request Handler for Generating Callback
app.post("/generateCallback", async function(req,res) {
  console.log("This is req.body: %o", req.body);
  console.log("Received post request!!");
  console.log("Getting phone number list: ", req.body["phoneNumberList"]);
  let api_res = await generateCallback(req.body["phoneNumberList"]);
});

async function generateCallback(phoneNumberList) {
  for (let i = 0; i < phoneNumberList.length; i++) {
    console.log("Making request for " + phoneNumberList[i]);
    let res = await fetch(`https://vcc-na20.8x8.com/api/tstats/interactions/webcallback/externaltransaction/${phoneNumberList[i]}.json`);
    console.log("API request responded with %o", res.status);
  }													
}

// end of pipeline specification

// Now listen for HTTP requests
// it's an event listener on the server!
const listener = app.listen(PORT, function () {
  console.log("The static server is listening on port " + listener.address().port);
});

