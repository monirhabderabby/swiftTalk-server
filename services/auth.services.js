const md5 = require("md5");
const Auth = require("../models/auth");

exports.createAccount = async data => {
    const result = await Auth.create({
        ...data,
        password: md5(data.password),
    });
    return result;
};
