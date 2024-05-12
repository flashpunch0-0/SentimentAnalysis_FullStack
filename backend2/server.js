const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./yourModel");
const app = express();
require("dotenv").config();
// allow for all routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const data = Product.find({});
console.log(data);
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog, this is my group project");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const mongoURI = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose
  .connect(mongoURI)
  // updated
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
