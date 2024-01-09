const Bill = require("../models/Bill");
const express = require("express");
const router = express.Router();

router.get("/get-all", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).send(bills);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-bill", async (req, res) => {
  try {
    await Bill.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.status(200).json("Item updated successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/delete-bill", async (req, res) => {
  try {
    await Bill.findOneAndDelete({ _id: req.body._id }, req.body);
    res.status(200).json("Item deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
