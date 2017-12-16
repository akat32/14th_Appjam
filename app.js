var express = require('express');
var rndstring = require('randomstring');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
require('./mongo');
var app = express();
var auth = require('./routes/auth')(express.Router(), Users, rndstring);
var school = require('./routes/school')(express.Router(),School, rndstring);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use('/auth',auth);
app.use('/school', school);
app.listen(3000, ()=>{
  console.log('Server Porting on 3000');
})

module.exports = app;
