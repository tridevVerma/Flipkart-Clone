import Product from "../models/productsSchema.js";

const oneProduct = async (req, res) => {
  try {
    const result = await Product.findOne({ id: req.params.id });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(503).send("Internal Server Error");
  }
};

export default oneProduct;
