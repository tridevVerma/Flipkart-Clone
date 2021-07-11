import Product from "../models/productsSchema.js";

const products = async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send("Internal Server Error");
  }
};

export default products;
