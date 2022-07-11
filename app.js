var createError = require('http-errors');
var express = require('express');
let bodyParser = require('body-parser')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/login_register');

var app = express();
// 改写
var http = require('http')
var server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态资源托管
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extend:true}))
// app.use('/', indexRouter);
app.use('/users', usersRouter);


// module.exports = app;
server.listen('3000',()=>{
  console.log('3000');
})
