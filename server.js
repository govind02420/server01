const express = require('express')
const app = express()
const routeEmp = require('./routes/employee.js')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/emps',routeEmp)

app.listen(8888, () => console.log(`server is listening on port 8888!`))