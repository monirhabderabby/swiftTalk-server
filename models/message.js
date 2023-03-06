const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Auth",
        },
        text: {
            type: String,
        },
        photos: [
            {
                type: String,
            },
        ],
        audio: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const MessageSchema = mongoose.model("Message", messageSchema);

module.exports = MessageSchema;
