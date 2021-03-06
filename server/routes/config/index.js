const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express')
const app = express();

// 处理跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Length", '74')
    res.header("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    if(req.method=="OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
    else  next();
});



// 解析 application/json 
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));


module.exports = app;