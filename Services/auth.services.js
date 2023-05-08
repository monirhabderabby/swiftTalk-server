const md5 = require("md5");
const Auth = require("../Models/auth");
const JWT = require("jsonwebtoken");

exports.createAccount = async data => {
    const result = await Auth.create({
        email: data.email,
        password: md5(data.password),
        name: data.name,
        profilePhoto: data.profilePhoto,
    });
    return result;
};

exports.loginAccount = async (data, res) => {
    try {
        const { email, password } = data || {};
        const encPassword = md5(password);
        const jwtSecret = process.env.JWT_SECRET;

        const user = await Auth.findOne({ email: email });
        if (!user) {
            return {
                success: false,
                message: "User not found",
            };
        }

        const token = JWT.sign({ id: user._id, user: user.email }, jwtSecret, { expiresIn: "1d" });
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
