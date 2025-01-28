const multer = require("multer");
const path = require("path");

// Define storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Set the uploads directory
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname)); // Add unique name and file extension
  },
});

// Define file filter logic
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") || // Allow images for photo
    file.mimetype === "application/pdf" || // Allow PDF for CV
    file.mimetype === "application/msword" || // Allow Word DOC for CV
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // Allow Word DOCX for CV
  ) {
    cb(null, true); // Accept the file
  } else {
    cb(
      new Error("Invalid file type. Only images and documents are allowed."),
      false
    ); // Reject the file
  }
};

// Configure multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit
});

module.exports = upload;
