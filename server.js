const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;
// routes
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const billRoute = require("./routes/bills");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};
// middlewares
app.use(express.json());
app.use(cors());
app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/bills", billRoute);
app.use("/auth", authRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port: ${port}`);
});
