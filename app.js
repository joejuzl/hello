var http = require('http'),
  httpProxy = require('http-proxy');

var address = 'http://' + process.env.FRONTSERVICE_SERVICE_HOST + ':' + process.env.FRONTSERVICE_SERVICE_PORT;

httpProxy.createProxyServer({
  target: address
}).listen(8000);
