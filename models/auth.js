const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    profilePhoto: {
        type: String,
    },
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
