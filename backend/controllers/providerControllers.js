const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const createProvider = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !phone || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Get the file paths
    const photo = req.files?.photo?.[0]?.path;
    const cv = req.files?.cv?.[0]?.path;

    if (!photo || !cv) {
      return res
        .status(400)
        .json({ success: false, message: "Photo and CV are required" });
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
      cv,
      provider: true,
    });

    await newProvider.save();

    res.status(201).json({
      success: true,
      message: "Provider registered successfully",
      user: {
        id: newProvider._id,
        firstName: newProvider.firstName,
        lastName: newProvider.lastName,
        email: newProvider.email,
        phone: newProvider.phone,
        photo: newProvider.photo,
        cv: newProvider.cv,
      },
    });
  } catch (error) {
    console.error("Error in createProvider:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { createProvider };
