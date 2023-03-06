const mongoose = require("mongoose");
const MessageSchema = require("./message");

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Auth",
            },
        ],
        conversation_type: {
            type: String,
        },
        messages: {
            type: [mongoose.Schema.Types.Mixed],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
