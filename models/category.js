const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");
const categorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);

const category = mongoose.model("categories", categorySchema);
module.exports = category;
