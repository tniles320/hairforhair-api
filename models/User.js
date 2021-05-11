const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: "First name is required",
  },
  last_name: {
    type: String,
    trim: true,
    required: "Last Name is required",
  },
  email: {
    type: String,
    trim: true,
    required: "Email is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
