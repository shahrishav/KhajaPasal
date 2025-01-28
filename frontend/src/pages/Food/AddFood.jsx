import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./AddFood.css"; // Import CSS for styling

const AddFood = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        hotel: "",
    });
    const [image, setImage] = useState(null);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        // Fetch available hotels
        const fetchHotels = async () => {
            try {
                const response = await fetch("http://localhost:5500/api/hotels");
                const data = await response.json();
                setHotels(data.hotels);
            } catch (error) {
                toast.error("Failed to fetch hotels");
            }
        };

        fetchHotels();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Please upload an image.");
            return;
        }

        const data = new FormData();
        data.append("name", formData.name);
        data.append("price", formData.price);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("hotel", formData.hotel);
        data.append("image", image);

        try {
            const response = await fetch("http://localhost:5500/api/foods", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                toast.success("Food added successfully!");
                setFormData({
                    name: "",
                    price: "",
                    category: "",
                    description: "",
                    hotel: "",
                });
                setImage(null);
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Failed to add food.");
            }
        } catch (error) {
            toast.error("Server error. Please try again later.");
        }
    };

    return (
        <div className="add-food-page">
            <h2 className="add-food-title">Add Food Item</h2>
            <form onSubmit={handleSubmit} className="add-food-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="form-input"
                    >
                        <option value="">Select Category</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Main Dishes">Main Dishes</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-input"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Hotel</label>
                    <select
                        name="hotel"
                        value={formData.hotel}
                        onChange={handleChange}
                        required
                        className="form-input"
                    >
                        <option value="">Select Hotel</option>
                        {hotels.map((hotel) => (
                            <option key={hotel._id} value={hotel._id}>
                                {hotel.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Add Food
                </button>
            </form>
        </div>
    );
};

export default AddFood;
