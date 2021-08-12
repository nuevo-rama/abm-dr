//realiza las acciones en la BD con la información que viene de userLogic
const express = require('express');
const router = express.Router();

const connection = require("./configDB");
const { connect } = require("./configDB");

//exportaremos un objeto con todas las funcionalidades

const controller = {};

controller.list = (req, res) => {
    //res.render('index');
    connection.query('SELECT * FROM Users',(error, results)=>{
        if(error){
            res.json(error);
        }else{
            res.render('index', {results:results});
        }
    })
};

controller.create = (req,res) => {    //recibe los datos desde los inputs
    //console.log(req.body); //req.body vienen todos los datos de los campos del formulario
    //res.send('works');
    const data = req.body;
    //const id = req.params.id;
    connection.query('INSERT INTO Users SET ?' [data], (error, dataUser) => {
        console.log(dataUser);
        res.send('works');
        //if (error) {
            //throw error;
        //}else{            
            //res.render('edit.ejs', {users:results[0]});            
        //}   
    });
};

/*controller.delete = (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE userId = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
};

//GUARDAR un REGISTRO
controller.save = (req, res)=>{
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    const age = req.body.age;

    conexion.query('INSERT INTO Users SET ?',{name:name,user:user,pass:pass,age:age}, (error, results)=>{
        if(error){
            console.log(error);
        }else{ 
            res.redirect('/');         
        }
});
};

// ACTUALIZAR un REGISTRO
controller.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    const age = req.body.age;
    conexion.query('UPDATE Users SET ? WHERE id = ?',[{name:name,user:user,pass:pass,age:age}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};*/

module.exports = controller;