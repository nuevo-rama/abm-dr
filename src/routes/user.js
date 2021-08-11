const express = require('express');
const router = express.Router();

const userDB = require('../database/userDB');

router.get('/', userDB.list);
//router.post('/add', userDB.create);
//router.get('/delete/:id', userDB.delete);

//router.post('/update/:id', userDB.update);
//router.get('/update/:id', userDB.edit);




module.exports = router;