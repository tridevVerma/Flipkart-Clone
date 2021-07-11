import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("Product", productsSchema);

export default Product;
