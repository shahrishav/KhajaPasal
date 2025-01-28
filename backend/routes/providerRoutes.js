const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer"); // Import multer configuration
const { createProvider } = require("../controllers/providerControllers");

// Route for Be Our Beautician registration
router.post(
  "/beourprovider",
  upload.fields([
    { name: "photo", maxCount: 1 }, // Handle single photo upload
    { name: "cv", maxCount: 1 }, // Handle single CV upload
  ]),
  createProvider
);

module.exports = router;
