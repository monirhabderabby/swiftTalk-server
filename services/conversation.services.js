const Conversation = require("../models/conversation");

exports.createConversation = async body => {
    const result = await Conversation.create(body);
    return result;
};

exports.getConversation = async userID => {
    const result = await Conversation.find({ participants: { $in: [userID, userID] } }).populate("participants");
    return result;
};
