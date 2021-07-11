import products from "../../assets/products.js";
import Product from "../models/productsSchema.js";

const defaultData = async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data Stored to DB Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default defaultData;
