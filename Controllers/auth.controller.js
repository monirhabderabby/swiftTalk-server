const JWT = require("jsonwebtoken");
const { createAccount, loginAccount } = require("../Services/auth.services");

exports.createAccount = async (req, res) => {
    try {
        const result = await createAccount(req.body);
        const token = JWT.sign({ user: result.email, name: result.name, userID: result._id }, process.env.JWT_SECRET);
        res.status(200).json({
            success: true,
            message: "You are registered!",
            token: token,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Registration Failed",
            error: error.message,
        });
    }
};

exports.loginAccount = async (req, res) => {
    try {
        const result = await loginAccount(req.body, res);
        return res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Login Failed",
            error: error.message,
        });
    }
};
