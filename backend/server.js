const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const ProductController = require("./User/Routes/ProductRoute");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/product", ProductController);

app.listen(process.env.PORT || 3003, (err) => {
  if (!err) {
    console.log(`server is running at port ${process.env.PORT}`);
  } else {
    console.log(err);
  }
});
