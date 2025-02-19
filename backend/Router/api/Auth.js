const express = require("express");
const {
  LoginController,
  otpVerifyController,
  resendOtpController,
  registrationController,
} = require("../../Controllers/authController");
const getusermiddleware = require("../../Middleware/getusermiddleware");
const router = express.Router();

router.post("/signup", registrationController);
router.post("/login", LoginController);
router.patch("/otp-verify", otpVerifyController);
router.patch("/resend-otp", resendOtpController);
router.get("/alluser", getusermiddleware, (req, res) => {
  res.send("all user");
});

module.exports = router;
