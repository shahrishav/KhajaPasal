const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers");
const upload = require("../middleware/multer");

// User routes
router.post("/signup", UserController.createUser); // Sign up a new user
router.post("/login", UserController.loginUser); // Login for existing users
router.get("/getSingleUser/:id", UserController.getSingleUser); // Fetch a single user by ID or email
router.post("/resetPassword", UserController.resetPassword); // Reset password
router.post("/changePassword", UserController.changePassword); // Change password for logged-in users
router.put(
  "/updateUser/:id",
  upload.single("profileImage"),
  UserController.updateUser
); // Update user profile

// Additional endpoints for Khaja Pasal
router.get("/getAllUsers", UserController.getAllUsers); // Fetch all users (admin-only route)
router.delete("/deleteUser/:id", UserController.deleteUser); // Delete a user (admin-only route)
router.get("/getUserOrders/:id", UserController.getUserOrders); // Fetch all orders for a specific user

module.exports = router;
