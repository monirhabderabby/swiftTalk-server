const express = require("express");
const { createConversation } = require("../controllers/conversation.controller");

const router = express.Router();

router.route("/conversation").post(createConversation);

module.exports = router;
