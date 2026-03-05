import express from "express";
import {registerUser,loginUser,getProfile,} from "../controllers/authController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Normal User Route
router.post("/register", registerUser);
router.post("/login",loginUser);

// protected route
router.get("/profile", protect,getProfile);

// Admin Routes
router.get("/admin",protect,authorizeRoles("admin"),(req, res) =>{
    res.json({message: "Welcome Admin"});
}
);

export default router;