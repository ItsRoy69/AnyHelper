const jwt = require("jsonwebtoken");
const Store = require("../models/stores.js");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await Store.findOne({_id:verifyToken._id,"tokens.token":token})

        if(!rootUser){
            throw new Error("User Not Found.");
        }

        req.token = token;
        req.rootUser = rootUser;

        next();

    } catch (error) {
        res.status(401).send("Unauthorized : No token provided");
        console.log(error);
    }
};

module.exports = auth;