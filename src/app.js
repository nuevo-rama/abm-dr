const express = require('express');
const path = require('path'); //se encarga de unir directorios

const app = express();

// importing routes
const userRoutes = require('./routes/userRoutes');

// settings
app.set('port', process.env.PORT || 3003);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //dirname nos da la ruta del archivo

// middlewares
app.use(express.urlencoded({extended: true})); //para interpretar los datos que vienen del navegador desde los inputs

// routes
app.use('/', userRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
