// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var port = process.env.PORT || 8080
var ip = process.env.IP || "127.0.0.1"


// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// START THE SERVER
// ====================================
app.listen(port, ip);
console.log('Magic happens on port ' + port);