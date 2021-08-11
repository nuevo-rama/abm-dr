const express = require('express');
const path = require('path'); //se encarga de unir directorios

const app = express();

// importing routes
const userRoutes = require('./routes/user');

// settings
app.set('port', process.env.PORT || 3003);
//app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //dirname nos da la ruta del archivo

// middlewares
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', userRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
