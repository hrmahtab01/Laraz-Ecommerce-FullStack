
const express = require('express');
const { AddtoorderController } = require('../../Controllers/orderController');
const router = express.Router();


router.post('/addtoorder', AddtoorderController)

module.exports = router;