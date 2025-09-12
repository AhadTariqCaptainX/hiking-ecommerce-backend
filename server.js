import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";  // ⬅️ import auth routes
import orderRoutes from "./routes/orderRoutes.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);  // ⬅️ add this line
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
