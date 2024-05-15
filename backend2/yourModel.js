const mongoose = require("mongoose");

const yourSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  content: {
    text: String,
    positivePercentage: Number,
    neutralPercentage: Number,
    negativePercentage: Number,
    highestLabel: String,
  },
});

const Product = mongoose.model("YourModels", yourSchema, "db_3");

module.exports = Product;
