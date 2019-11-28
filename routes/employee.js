const express = require('express')
const emp = express()

var mysql = require('mysql')
var connection = mysql.createConnection({
    "host" : "localhost",
    "database" : "node",
    "user" : "dac",
    "password" : "dac"
})

connection.connect()
emp.use(express.json())

function executeQuery(query,res){
    connection.query(query,(err,result)=>{
        if(err == null )res.send(JSON.stringify(result))
        else res.send(JSON.stringify(err))
    })
}

emp.get("/",(req,res)=>{
    var query = `select * from Emp`
    executeQuery(query,res);
})

emp.delete("/:No",(req,res)=>{
    var query = `delete from Emp where No=${req.params.No}`
    executeQuery(query,res);
})

emp.put("/:No",(req,res)=>{
    var query = `update Emp set Name='${req.body.Name}', Age=${req.body.Age} where No=${req.params.No}`;
    executeQuery(query,res);
})

emp.post("/",(req,res)=>{
    var query = `insert into Emp values( ${req.body.No},'${req.body.Name}',${req.body.Age})`;
    executeQuery(query,res);
})

module.exports = emp