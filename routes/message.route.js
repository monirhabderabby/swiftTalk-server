const express = require("express");
const { createMessage } = require("../controllers/message.controller");

const router = express.Router();

router.route("/message/:id").post(createMessage);

module.exports = router;
