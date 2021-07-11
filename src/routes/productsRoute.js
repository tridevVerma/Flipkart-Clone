import express from "express";
import products from "../controllers/products.js";
import oneProduct from "../controllers/oneProduct.js";

const productsRoute = express.Router();

productsRoute.get("/", products);
productsRoute.get("/:id", oneProduct);
export default productsRoute;
