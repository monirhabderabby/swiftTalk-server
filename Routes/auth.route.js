const express = require("express");
const { createAccount, loginAccount } = require("../Controllers/auth.controller");
const router = express.Router();

router.route("/register").post(createAccount);
router.route("/login").post(loginAccount);

module.exports = router;
