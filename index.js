const express = require("express");
const createError = require('http-errors');
const bodyparser = require('body-parser')
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require("mysql2");
const { json } = require("body-parser");
const path = require("path");
const fetch = require('node-fetch');
const { stringify } = require('querystring');
const bcrypt = require('bcryptjs');
// const routes = require('./routes');
app.use(express.json());
// app.use(routes);
const db = require('./dbConnection');

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(cors());
const { check } = require('express-validator');
// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

var registration = require('./registration.js');
var Recaptcha = require('./Recaptcha.js');
var sendEmail = require('./sendEmail.js');
var stripepay = require('./stripepay.js');
var login = require('./login.js');
  var profile = require('./profile.js');
 const encryptdatass = require("./encryptdata");

var Faq = require('./FAQ.js');
var aboutus = require('./aboutus.js');
var users = require('./users.js');
var reportapi = require('./reportapi.js');
var stripetrial = require('./stripetrial.js');
var chat = require('./chat.js');
var alipaytrial = require('./alipaytrial.js');
var wechatpay = require('./wechatpay.js');

var admin_profile = require('./admin_profile.js');
var admin_login= require('./admin/admin_login.js');
var report = require('./admin/report.js');




app.use('/Faq', Faq);
app.use('/aboutus', aboutus);
app.use('/users', users);
app.use('/chat', chat);
app.use('/alipaytrial', alipaytrial);
app.use('/wechatpay', wechatpay);
app.use(express.static('public_html'));
app.use('/registration', registration);
app.use('/Recaptcha', Recaptcha);
app.use('/sendEmail', sendEmail);
app.use('/stripepay', stripepay);
app.use('/login', login);
app.use('/profile', profile);
app.use('/reportapi', reportapi);
app.use('/stripetrial', stripetrial);

app.use('/admin_profile', admin_profile);
app.use('/admin_login', admin_login);
app.use('/report', report);




app.listen(8000, () => {
  console.log("server started on port 8000...");
});








