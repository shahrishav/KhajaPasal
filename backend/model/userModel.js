const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["customer", "admin", "delivery"],
      default: "customer", // Default role for Khaja Pasal users
    },
    photo: { type: String, default: "" }, // User profile picture
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders", // Reference to an Orders collection
      },
    ], // Stores user orders
    resetToken: { type: String, default: null }, // Token for password reset (if needed)
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
