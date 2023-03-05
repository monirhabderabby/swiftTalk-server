const { createAccount } = require("../services/auth.services");

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
