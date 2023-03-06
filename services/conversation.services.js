const Conversation = require("../models/conversation");

exports.createConversation = async body => {
    const result = await Conversation.create(body);
    return result;
};
