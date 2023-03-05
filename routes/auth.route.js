const express = require("express");
const { createAccount } = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(createAccount);

module.exports = router;
