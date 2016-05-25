var express = require('express');
var banker = new express();

// Client side
banker.use(express.static(__dirname + '/client'));

// Start the server
banker.listen(8080);
