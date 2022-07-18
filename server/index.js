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

// POST Request Handler for Water Reservoir Data
app.post("/query/getWaterData", async function(req,res) {
  console.log(req.body);
  console.log("getting data");
  let water = await lookupWaterData(req.body.month, req.body.year);
  res.json(water);
})

// No static server or /public because this server
// is only for AJAX requests

// respond to all AJAX querires with this message
app.use(function(req, res, next) {
  // This line was causing a lot of errors; changed 'req' to 'res'
  res.json({msg: "No such AJAX request"})
});

// end of pipeline specification

// Now listen for HTTP requests
// it's an event listener on the server!
const listener = app.listen(PORT, function () {
  console.log("The static server is listening on port " + listener.address().port);
});


async function lookupWaterData(month, year) {
  // Need 7 Stations: SHA, ORO, CLE, NML, LUS, DNP, and BER 
  let api_url = "";
  // Get data for fullish month span
  if (month > 9) {
    api_url = `https://cdec.water.ca.gov/dynamicapp/req/JSONDataServlet?Stations=SHA,ORO,CLE,NML,LUS,DNP,BER&SensorNums=15&dur_code=M&Start=${year}-${month}-01&End=${year}-${month}-01`;
  }
  else {
    api_url = `https://cdec.water.ca.gov/dynamicapp/req/JSONDataServlet?Stations=SHA,ORO,CLE,NML,LUS,DNP,BER&SensorNums=15&dur_code=M&Start=${year}-0${month}-01&End=${year}-0${month}-01`;
  }
  
  // send it off
  let fetchResponse = await fetch(api_url);
  let data = await fetchResponse.json();
  console.log(data);
  console.log("Num objects returned: ", data.length);
  let stations = ['SHA', 'ORO', 'CLE', 'NML', 'LUS']
  // for (let i = 0; i < 7; ++i)
  // {
  //   if (stations[i] == data[i].stationId)
  //     data[i] = data[i].value;
  //   else
  //   {
  //     data.splice(i, 0, 0);
      
  //   }
  // }
  data = data.map(lakeObj => lakeObj.value / 1000000);
  console.log(data);
  return data;
}