const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {

    let token;

    // safer header access
    const authHeader = req.headers.authorization;

    // check Bearer token
    if (authHeader && authHeader.startsWith("Bearer ")) {

        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {

            if (err) {
                return res.status(401).json({
                    message: "User is not authorized"
                });
            }

            req.user = decoded.user;

            next();
        });

    } else {
        return res.status(401).json({
            message: "User is not authorized or token is missing"
        });
    }
};

module.exports = validateToken;