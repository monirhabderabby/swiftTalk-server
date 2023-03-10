const express = require("express");
const { createConversation, getConversations } = require("../controllers/conversation.controller");

const router = express.Router();

router.route("/conversation").post(createConversation);
router.route("/conversation/:id").get(getConversations);

module.exports = router;
