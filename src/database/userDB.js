//realiza las acciones en la BD con la información que viene de userLogic
const express = require('express');
const router = express.Router();

const connection = require("./configDB");
const { connect } = require("./configDB");

//exportaremos un objeto con todas las funcionalidades

const controller = {};

controller.list = (req, res) => {
    conexion.query('SELECT * FROM Users',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    })
};

/*controller.create = (req,res) => {    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE userId=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {users:results[0]});            
        }        
    });
};

controller.delete = (req, res) => {
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