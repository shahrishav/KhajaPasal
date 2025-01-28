const express = require("express");
const { createFood, getAllFoods, getFoodsByHotel, updateFood, deleteFood, getFoodById } = require("../controllers/foodController");
const upload = require("../middleware/multer");

const router = express.Router();

// Create a new food item
router.post("/", upload.single("image"), createFood);

// Get all food items
router.get("/", getAllFoods);
router.get("/:id", getFoodById);


// Get food items by hotel
router.get("/hotel/:hotelId", getFoodsByHotel);

// Update a food item
router.put("/:id", updateFood);

// Delete a food item
router.delete("/:id", deleteFood);

module.exports = router;
