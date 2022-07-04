const express = require('express');
require('dotenv').config();
const colors = require('colors');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const mongoDBConnect = require('./configs/db');

// init express
const app = express();

// body init
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// mongo DB connect
mongoDBConnect()

// ejs setup
app.set("view engine", "ejs");
app.set("layout", "layouts/app");
app.use(expressLayout);


// static folders
app.use('/assets',express.static(path.join(__dirname,'/assets')));

// Router
app.use('/student', require('./routers/studentRouter'))






// listen server
app.listen(process.env.SERVER_PORT,()=>{
    console.log('server is runnig' + ' ' + 'http://localhost:5050/student' + ' ' + process.env.SERVER_PORT.green);
})