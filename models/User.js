const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      required: true,
    },
  },
  { timeStamp: true }
);
const User = mongoose.model("users", UserSchema);
module.exports = User;
