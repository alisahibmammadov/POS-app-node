const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.get("/", async (req, res) => {
  const _id = req.body._id;
  try {
    const user = await User.findById(_id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
