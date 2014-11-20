var express = require('express');
var request = require('request');
var app = express();


var address = "http://"+process.env.BACKSERVICE_SERVICE_HOST+":"+process.env.BACKSERVICE_SERVICE_PORT;


app.get('/', function(req, res) {
  request(address, function(error, response, body) {
    res.type('text/plain');
    res.send(body);
  });
});

app.listen(process.env.PORT || 8000);
