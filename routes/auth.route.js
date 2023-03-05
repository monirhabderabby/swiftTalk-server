const express = require("express");
const { createAccount, loginAccount } = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(createAccount);
router.route("/login").post(loginAccount);

module.exports = router;
