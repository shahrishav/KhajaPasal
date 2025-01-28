const express = require("express");
const {
    createHotel,
    getHotels,
    getHotelById,
    updateHotel,
    deleteHotel,
} = require("../controllers/hotelController");
const upload = require("../middleware/multer");

const router = express.Router();

// Create a new hotel
// router.post("/", createHotel);
router.post("/", upload.single("image"), createHotel);


// Get all hotels
router.get("/", getHotels);

// Get a hotel by ID
router.get("/:id", getHotelById);

// Update a hotel
router.put("/:id", updateHotel);

// Delete a hotel
router.delete("/:id", deleteHotel);

module.exports = router;
