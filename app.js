var http = require('http');

var address = process.env.BACK_PORT;

var options = {
  host: address,
  path: '/'
};



var server = http.createServer(function(request, response) {
  http.request(options, function(resp) {
    var str = '';
    resp.on('data', function(chunk) {
      str += chunk;
    });
    resp.on('end', function() {
      response.writeHead(200, {
        "Content-Type": "text/plain"
      });
      response.end(str);
    });
  }).end();

});


server.listen(8000);


console.log("Server running at http://127.0.0.1:8000/");
