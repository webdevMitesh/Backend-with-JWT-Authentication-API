import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);

//TestRoutes

app.get("/",(req,res)=>{
    res.send("Api is Running..........");
});

//Global Error Handler

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});