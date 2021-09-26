var express = require('express');
var app = express();
console.log(__dirname)
//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder


var server = app.listen(5000);