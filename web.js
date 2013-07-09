var express = require('express');

var app = express.createServer(express.logger());



app.get('/', function(request, response)

{
  var sent = fs.readFileSync('/bitstarter/index.html').toString('utf-8');
  response.send(sent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
