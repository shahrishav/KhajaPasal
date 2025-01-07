const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const createProvider = async (req, res) => {
  const { firstName, lastName, email, phone, password, service } = req.body;

  if (!firstName || !lastName || !email || !phone || !password || !service) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Check if the user (provider) already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Provider already exists" });
    }

    // Get the uploaded photo path
    const photo = req.file?.path; // Assuming a single file is uploaded for the photo

    if (!photo) {
      return res
        .status(400)
        .json({ success: false, message: "Photo is required" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new provider
    const newProvider = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      photo,
      service, // Service being provided (e.g., type of food or cuisine)
      provider: true, // Marking this user as a provider
    });

    await newProvider.save();

    res.status(201).json({
      success: true,
      message: "Food provider registered successfully",
      provider: {
        id: newProvider._id,
        firstName: newProvider.firstName,
        lastName: newProvider.lastName,
        email: newProvider.email,
        phone: newProvider.phone,
        photo: newProvider.photo,
        service: newProvider.service,
      },
    });
  } catch (error) {
    console.error("Error in createProvider:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { createProvider };
