const Booking = require("../models/bookingModel");
const User = require("../models/userModel");

// Controller to create a new booking
exports.createBooking = async (req, res) => {
  const { userId, category, subCategory, food, price, location, paymentType } = req.body;

  if (!userId || !category || !subCategory || !food || !price || !location || !paymentType) {
    return res
      .status(400)
      .json({ message: "All fields are required to create a booking." });
  }
  console.log(req.body)

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    console.log(user)

    const booking = new Booking({
      userId,
      username: `${user.firstName} ${user.lastName}`,
      category,
      subCategory,
      food,
      price,
      location,
      paymentType
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Error creating booking.", error });
  }
};

// Controller to get all bookings for a user
exports.getUserBookings = async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await Booking.find({ userId })
      .populate("acceptedBy", "firstName lastName email phone")
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Controller to get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "firstName lastName email") // Populate user details
      .populate("acceptedBy", "firstName lastName email phone") // Populate provider details
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    res.status(500).json({ message: "Error fetching all bookings", error });
  }
};

// Controller to update booking status
exports.updateBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const { status, acceptedBy } = req.body;

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    if (acceptedBy) {
      const provider = await User.findById(acceptedBy);
      if (!provider) {
        return res.status(404).json({ message: "Provider not found." });
      }
      booking.acceptedBy = acceptedBy;
    }

    booking.status = status || booking.status;
    await booking.save();

    res.status(200).json({ message: "Booking updated successfully", booking });
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Error updating booking", error });
  }
};
