var express = require('express');
var request = require('request');
var app = express();


var address = 'http://localhost:9005/';


app.get('/', function(req, res) {
  request(address, function(error, response, body) {
    res.type('text/plain');
    res.send(body);
  });
});

//app.listen(process.env.PORT || 4730);
app.listen(8000);
