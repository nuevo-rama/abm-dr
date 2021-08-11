const express = require('express');
const router = express.Router();

const userRequest = require('../controllers/userRequest');
const userLogic = require('../logica/userLogic');

router.get('/', userLogic.list);
//router.get('/', userRequest.list);

module.exports = router;