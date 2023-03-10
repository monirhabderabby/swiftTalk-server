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
        messages: [
            {
                sender: {
                    type: mongoose.Schema.Types.ObjectId,
                },
                text: String,
                audio: String,
                photos: [
                    {
                        type: String,
                    },
                ],
                sentAt: {
                    type: Date,
                    default: Date.now(),
                },
            },
        ],
        lastMessage: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
