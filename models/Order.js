// This model covers:

// Normal product purchase

// Rental system (optional rental details)

// Order tracking with status

// Payment method

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to User model
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product", // Reference to Product model
        },
        qty: { type: Number, required: true },
        price: { type: Number, required: true }, // Store price at time of order
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["easypaisa", "bank"],
      default: "easypaisa",
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "completed", "cancelled"],
      default: "pending",
    },
    rentalDetails: {
      isRental: { type: Boolean, default: false },
      durationDays: { type: Number }, // Rental duration
      deposit: { type: Number },
      deductionPercent: { type: Number },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
