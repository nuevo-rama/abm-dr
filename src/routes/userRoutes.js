const express = require('express');
const router = express.Router();

const controller = require('../database/userDB'); //desde userDB

router.get('/', controller.list);
router.post('/add', controller.create);
//router.get('/delete/:id', userDB.delete);

//router.post('/update/:id', userDB.update);
//router.get('/update/:id', userDB.edit);




module.exports = router;