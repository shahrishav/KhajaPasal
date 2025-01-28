const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  username: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  food: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: "Not Accepted" },
  paymentType: { type: String, required: true },
  acceptedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
