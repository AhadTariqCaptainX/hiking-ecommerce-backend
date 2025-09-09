import express from "express";
import { getProducts, addProduct } from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, addProduct); // only logged-in users can add

export default router;
