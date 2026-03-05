import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protected Routes
export const protect = async (req, res, next) => {
    try {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer ")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Not Authorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");

        next();
    } catch (error) {
        return res.status(401).json({ message: "Token failed" });
    }
};

// Acces on Role Base

export const authorizeRoles = (...roles) => {
    return(req,res, next) =>{
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied: insufficient role ",
            });
        }
        next();
    };
};