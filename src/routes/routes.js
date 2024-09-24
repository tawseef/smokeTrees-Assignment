const express = require("express");
const router = express.Router();
const { handleRegister } = require("../controller/controller");

router.post("/register", handleRegister);

module.exports = router;
