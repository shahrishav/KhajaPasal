const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./database/db");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

// Initialize the Express app
const app = express();

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.DB_URL) {
  console.error("Error: DB_URL is not defined in environment variables.");
  process.exit(1); // Exit the application if critical variables are missing
}

if (!process.env.JWT_TOKEN_SECRET) {
  console.error(
    "Error: JWT_TOKEN_SECRET is not defined in environment variables."
  );
  process.exit(1);
}

// Connect to MongoDB
connectDB();

// CORS policy configuration
const corsPolicy = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsPolicy));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure `uploads` directory exists
const uploadsDirectory = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDirectory)) {
  fs.mkdirSync(uploadsDirectory);
}
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Serve static files from the `uploads` directory
app.use("/uploads", express.static(uploadsDirectory));

// API Routes'
app.use("/api/hotels", require("./routes/hotelRoutes")); // If you implement hotel routes
app.use("/api/foods", require("./routes/foodRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/provider", require("./routes/providerRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));

// Fallback route for unmatched paths
app.use((req, res, next) => {
  res.status(404).json({ error: "API endpoint not found!" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error Stack:", err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    details:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal Server Error",
  });
});

// Graceful shutdown for MongoDB connection
process.on("SIGINT", async () => {
  console.log("SIGINT received. Closing MongoDB connection...");
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Closing MongoDB connection...");
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
  process.exit(0);
});

// Define the server port
const PORT = process.env.PORT || 5500;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing or other purposes
module.exports = app;
