const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        imageUrl: {
            type: String, // Store a link to the image or use Multer for file uploads
        },
        contact: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);

