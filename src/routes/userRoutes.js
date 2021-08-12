const express = require('express');
const router = express.Router();

const controller = require('../database/userDB'); //desde userDB

router.get('/', controller.list);
router.post('/add', controller.save);
//router.get('/editUser/:id', controller.edit);
//router.get('/editUser/:id', controller.update);
//router.get('/delete/:id', controller.delete);

//router.post('/update/:id', userDB.update);
//router.get('/update/:id', userDB.edit);




module.exports = router;