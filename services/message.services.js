const Conversation = require("../models/conversation");
const MessageSchema = require("../models/message");

exports.createMessage = async data => {
    const { message, conversationId } = data;
    const conversationUpdated = await Conversation.updateOne(
        { _id: conversationId },
        {
            $push: {
                messages: message,
            },
            $set: {
                lastMessage: message?.text && message.text,
            },
        }
    );
    const result = await Conversation.find({ _id: conversationId });

    return result;
};
