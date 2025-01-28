const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel", // Assuming you have a "Hotel" model
            required: true,
        },
        availability: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
