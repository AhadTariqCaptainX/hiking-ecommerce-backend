import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stockQty: { type: Number, required: true },
  isRentable: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
