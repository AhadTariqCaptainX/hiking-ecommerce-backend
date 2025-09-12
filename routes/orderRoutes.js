import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder); // Create order
router.get("/myorders", protect, getMyOrders); // Logged-in user orders
router.get("/", protect, admin, getAllOrders); // Admin: all orders
router.put("/:id", protect, admin, updateOrderStatus); // Admin: update order status
router.delete("/:id", protect, admin, deleteOrder); // Admin: delete order

export default router;
