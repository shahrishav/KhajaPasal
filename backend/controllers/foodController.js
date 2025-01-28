const Food = require("../models/foodModel");

// Add a new food item
exports.createFood = async (req, res) => {
    const { name, category, price, description, imageUrl, hotel, availability } = req.body;
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image is required" });
    }
    try {
        const food = new Food({
            name,
            category,
            price,
            description,
            imageUrl: `http://localhost:5500/uploads/${req.file.filename}`,
            hotel,
            availability,
        });

        const savedFood = await food.save();
        res.status(201).json({ success: true, message: "Food item created!", food: savedFood });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error creating food item.", error: error.message });
    }
};

// Get all food items
exports.getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find().populate("hotel", "name location");
        res.status(200).json({ success: true, foods });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching food items.", error: error.message });
    }
};

// Get food by ID
exports.getFoodById = async (req, res) => {
    const { id } = req.params;
    try {
        const food = await Food.findById(id).populate("hotel", "name location");
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found." });
        }
        res.status(200).json({ success: true, food });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching food item.", error: error.message });
    }
};

// Get food items by hotel
exports.getFoodsByHotel = async (req, res) => {
    const { hotelId } = req.params;

    try {
        const foods = await Food.find({ hotel: hotelId });
        res.status(200).json({ success: true, foods });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching food items for the hotel.", error: error.message });
    }
};

// Update a food item
exports.updateFood = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedFood = await Food.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedFood) {
            return res.status(404).json({ success: false, message: "Food item not found." });
        }
        res.status(200).json({ success: true, message: "Food item updated.", food: updatedFood });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating food item.", error: error.message });
    }
};

// Delete a food item
exports.deleteFood = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedFood = await Food.findByIdAndDelete(id);
        if (!deletedFood) {
            return res.status(404).json({ success: false, message: "Food item not found." });
        }
        res.status(200).json({ success: true, message: "Food item deleted." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting food item.", error: error.message });
    }
};
