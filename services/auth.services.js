const md5 = require("md5");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");

exports.createAccount = async data => {
    const result = await Auth.create({
        ...data,
        password: md5(data.password),
    });
    const jwtSecret = process.env.jwt_secret;
    const token = jwt.sign({ id: result._id, email: result.email }, jwtSecret, { expiresIn: "1d" });
    return {
        result: result,
        token: token,
    };
};

exports.loginAccount = async data => {
    try {
        const { email, password } = data || {};
        const encPassword = md5(password);
        const jwtSecret = process.env.jwt_secret;

        const user = await Auth.findOne({ email: email });
        if (!user) {
            return {
                success: false,
                message: "User not found",
            };
        }

        const token = jwt.sign({ id: user._id, user: user.email }, jwtSecret, { expiresIn: "1d" });
        if (user && encPassword == user.password) {
            return {
                success: true,
                token: token,
            };
        } else {
            return {
                success: false,
                message: "Your email or password is incorrect",
            };
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
