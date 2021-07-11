const dotenv = require("dotenv");
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import defaultData from "./src/controllers/loadProductsInDB.js";

import registerRoute from "./src/routes/registerRoute.js";
import loginRoute from "./src/routes/loginRoute.js";
import productsRoute from "./src/routes/productsRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.use("/newUser", registerRoute);
app.use("/login", loginRoute);
app.use("/products", productsRoute);

const URL =
  process.env.MONGODB_URI ||
  "mongodb+srv://saurav_e_commerce:sv@efk@e-commerce.yb8yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server connected at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

defaultData();
