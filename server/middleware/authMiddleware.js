import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = (req, res, next) => {
    const token = (req.header('Authorization') || "").replace('Bearer ', '');
    console.log("Token: " + token);
    if (!token) {
        console.log("No token provided");
        return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (ex) {
        console.log("Invalid token: " + ex);
        res.status(400).send({ error: 'Invalid token.' });
    }
};

//check the user

const checkUser = (req, res, next) => {
    console.log("function running");
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                console.log("Token not verified: " + err);
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user.username;
                console.log("Token verified");
                console.log("User: " + user);
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}

export {authMiddleware, checkUser};