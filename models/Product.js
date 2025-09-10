import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    isRental: {
      type: Boolean,
      default: false,
    },
    rentalRates: {
      oneWeek: { type: Number, default: 0 },  // e.g., 10% deduction
      twoWeeks: { type: Number, default: 0 }, // e.g., 20% deduction
      oneMonth: { type: Number, default: 0 }, // e.g., 35% deduction
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
