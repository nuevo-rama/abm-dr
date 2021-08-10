const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: '',
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es '+error);
        return
    }
    console.log('Conectado a la base de datos MySql!')
})
module.exports = conexion;