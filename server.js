const express = require('express');
const mysql = require('mysql2');

const mysql_config = require('./mysql_config');
const { error } = require('console');
const { errorMonitor } = require('events');

const app = express;
app.listen(3000, ()=>{
    console.log("Server Aberto")
})


const conection = mysql.createConnection(mysql_config);


app.get('/',(req,res)=>{

    let result ={
        status: 'sucesso',
        message: null,
        data: null
    }
})


connection.query("SELECT * FROM tasks", (err, results )=>{
    if(err)
    {
        result.status = "Erro";
        result.message = "Erro na obtenção das tarefas";
        result.data = [];
        //res.send(results);
        res.json(results);
    } else{
        result.status = "Sucesso";
        result.message = "Tarefas obtidas com sucesso";
        result.data=results;
        //res.send(results);
        res.json(results);
    }
})