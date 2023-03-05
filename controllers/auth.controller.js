const { createAccount, loginAccount } = require("../services/auth.services");

exports.createAccount = async (req, res) => {
    try {
        const result = await createAccount(req.body);
        res.send(result);
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
        const result = await loginAccount(req.body);
        return res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Login Failed",
            error: error.message,
        });
    }
};
