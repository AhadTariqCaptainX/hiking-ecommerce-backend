import Product from "../models/Product.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add product
export const addProduct = async (req, res) => {
  const { name, category, price, stockQty, isRentable } = req.body;
  try {
    const product = await Product.create({ name, category, price, stockQty, isRentable });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
