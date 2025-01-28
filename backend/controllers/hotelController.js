const Hotel = require("../models/hotelModel");

// Create a new hotel
exports.createHotel = async (req, res) => {
    try {
        const { name, location, description, contact } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const newHotel = new Hotel({
            name,
            location,
            description,
            contact,
            imageUrl: `http://localhost:5500/uploads/${req.file.filename}`,
        });

        await newHotel.save();
        res.status(201).json({ message: "Hotel created successfully", hotel: newHotel });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};



// Get all hotels
exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json({ hotels });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


// Get hotel by ID
exports.getHotelById = async (req, res) => {
    const { id } = req.params;

    try {
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return res.status(404).json({ success: false, message: "Hotel not found." });
        }
        res.status(200).json({ success: true, hotel });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching hotel.", error: error.message });
    }
};

// Update a hotel
exports.updateHotel = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedHotel) {
            return res.status(404).json({ success: false, message: "Hotel not found." });
        }
        res.status(200).json({ success: true, message: "Hotel updated.", hotel: updatedHotel });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating hotel.", error: error.message });
    }
};

// Delete a hotel
exports.deleteHotel = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedHotel = await Hotel.findByIdAndDelete(id);
        if (!deletedHotel) {
            return res.status(404).json({ success: false, message: "Hotel not found." });
        }
        res.status(200).json({ success: true, message: "Hotel deleted." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting hotel.", error: error.message });
    }
};
