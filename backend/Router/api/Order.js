
const express = require('express');
const { AddtoorderController, PaymentsuccessController } = require('../../Controllers/orderController');
const router = express.Router();


router.post('/addtoorder', AddtoorderController)
router.post("/success" ,PaymentsuccessController)

module.exports = router;