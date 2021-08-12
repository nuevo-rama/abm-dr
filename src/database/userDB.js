//realiza las acciones en la BD con la información que viene de userLogic
const express = require('express');
const router = express.Router();

const connection = require("./configDB");
const { connect } = require("./configDB");

const controller = {}; //exportaremos un objeto con todas las funcionalidades

// SELECT ALL FROM USERS (GET)
controller.list = (req, res) => {
    //res.render('index');
    connection.query('SELECT * FROM Users',(error, results)=>{
        if(error){
            res.json(error);
        }else{
            res.render('index', {results:results}); //revisar!!!!!
        }
    })
};

// CREATE (POST)
controller.save = (req, res) => { 
    const userName = req.body.userName;
    const user = req.body.user;
    const pass = req.body.pass;
    const age = req.body.age;

    connection.query('INSERT INTO Users SET ?',{userName:userName, user:user, pass:pass, age:age}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results); 
            res.redirect('/');         
        }
    });
};

// EDIT (GET)
connection.edit = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM Users WHERE id=?', [id], (error, results) => {
        if (error) {
            throw error;
        }else {
            res.render ('editUser', {results:results[0]}) //revisar!!!!!
        }
    });
};

// UPDATE (POST)
connection.update = (req, res) => { 
    const id = req.body.id;
    const userName = req.body.userName;
    const user = req.body.user;
    const pass = req.body.pass;
    const age = req.body.age;

    connection.query('UPDATE Users SET ? WHERE id = ?',[{userName:userName, user:user, pass:pass, age:age}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

//DELETE (GET)
controller.delete = (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM Users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
};




module.exports = controller;