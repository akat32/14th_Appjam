var express = require('express');
var rndstring = require('randomstring');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
require('./mongo');
var app = express();
var upload = require('./routes/upload');
var add = require('./routes/add')(express.Router(), Users, School);
var image = require('./routes/image')(express.Router(), Users, fs, path);
var auth = require('./routes/auth')(express.Router(), Users, rndstring, School);
var school = require('./routes/school')(express.Router(),School, rndstring);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use('/auth',auth);
app.use('/school', school);
app.use('/upload', upload);
app.use('/image',image);
app.use('/add',add);
app.listen(3000, ()=>{
  console.log('Server Porting on 3000');
})

module.exports = app;
