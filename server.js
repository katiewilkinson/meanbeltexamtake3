var express = require('express');
var expressSession = require('express-session');

//Required for when posting to DB
var bodyParser = require('body-parser');

var app = express(); //initialize express

app.use(expressSession({
  secret:'secrettokenhere',
  resave: false,
  saveUninitialized: true,
  rolling: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));



require(__dirname + '/server/config/mongoose');
require(__dirname + '/server/config/routes')(app);


app.listen(8000, function(){
	console.log('Listening on Port 8000');
});
