const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter a email address"],
    },
    password: {
        type: String,
        minlength: [6, "Password must be at least 6 characters"],
        required: [true, "Please enter a password"],
    },
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
});

const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
