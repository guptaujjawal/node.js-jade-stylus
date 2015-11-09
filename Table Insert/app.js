var express = require('express'),
	app=express(),
	path=require('path'),
	bodyParser= require('body-parser'),
	config=require('./config/config'),
	user = require('./routes/user');

// all environments
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use(bodyParser());

app.get('/', function (req, res) {
    res.render('index');
});

//....................... USER API's.............................
app.post('/register_user', user.register_user);
app.post('/pickupaddr', user.pickup_addr);
app.post('/deliveryaddr', user.delivery_addr);
app.post('/orders', user.orders);
			


var port=config.server.port;
app.listen(port);

console.log("App started on port :"+port);

