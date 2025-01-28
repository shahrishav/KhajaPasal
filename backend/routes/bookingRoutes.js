const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/bookingControllers");

// Route to create a new booking
router.post("/book", BookingController.createBooking);

// Route to get all bookings for a user
router.get("/user/:userId", BookingController.getUserBookings);

// Route to get all bookings
router.get("/all", BookingController.getAllBookings);

// Route to update a booking
router.put("/:id", BookingController.updateBooking);

module.exports = router;
