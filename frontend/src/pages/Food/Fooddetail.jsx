import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import HotelCard from "../../component/common/HotelCord"; // Reusable HotelCard Component
import "./FoodDetail.css"; // CSS scoped to FoodDetail component

const FoodDetail = () => {
    const { id } = useParams(); // Get food ID from URL
    const navigate = useNavigate();
    const [food, setFood] = useState(null);
    const [hotels, setHotels] = useState([]);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [bookingData, setBookingData] = useState({
        location: "",
        paymentType: "",
    });

    useEffect(() => {
        const fetchFoodDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5500/api/foods/${id}`);
                const data = await response.json();
                setFood(data.food);
            } catch (error) {
                console.error("Error fetching food details:", error);
            }
        };

        const fetchHotels = async () => {
            try {
                const response = await fetch("http://localhost:5500/api/hotels");
                const data = await response.json();
                setHotels(data.hotels || []);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            }
        };

        fetchFoodDetails();
        fetchHotels();
    }, [id]);

    const handleBookingChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem("user"))?.id;

        if (!userId) {
            toast.error("You must be logged in to book.");
            navigate("/login");
            return;
        }

        const bookingPayload = {
            userId,
            category: "Food",
            subCategory: food.category,
            food: food.name,
            price: food.price,
            location: bookingData.location,
            paymentType: bookingData.paymentType,
        };

        try {
            const response = await fetch("http://localhost:5500/api/bookings/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingPayload),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Booking successful!");
                setShowBookingForm(false);
            } else {
                toast.error(data.message || "Failed to create booking.");
            }
        } catch (error) {
            console.error("Error creating booking:", error);
            toast.error("Server error. Please try again later.");
        }
    };

    if (!food) {
        return <p>Loading food details...</p>;
    }

    return (
        <div className="food-detail-page">
            <img src={food.imageUrl} alt={food.name} className="food-detail-image" />
            <div className="food-detail-info">
                <h2>{food.name}</h2>
                <p>Price: ${food.price}</p>
                <p>Category: {food.category}</p>
                <p>{food.description}</p>
                <p>Hotel: {food.hotel?.name || "Unknown"}</p>
                <button
                    className="book-button"
                    onClick={() => setShowBookingForm(!showBookingForm)}
                >
                    Book Now
                </button>
            </div>

            {showBookingForm && (
                <div className="booking-modal">
                    <form className="booking-form" onSubmit={handleBookingSubmit}>
                        <button className="close-modal" onClick={() => setShowBookingForm(false)}>
                            &times;
                        </button>
                        <h3>Complete Your Booking</h3>
                        <div>
                            <label>Location</label>
                            <input
                                type="text"
                                name="location"
                                value={bookingData.location}
                                onChange={handleBookingChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Payment Type</label>
                            <select
                                name="paymentType"
                                value={bookingData.paymentType}
                                onChange={handleBookingChange}
                                required
                            >
                                <option value="">Select Payment Type</option>
                                <option value="Cash">Cash</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        <button type="submit">Confirm Booking</button>
                    </form>
                </div>
            )}

            <div className="related-hotels">
                <h3>Related Hotels</h3>
                <div className="hotel-grid">
                    {hotels.map((hotel) => (
                        <HotelCard key={hotel._id} hotel={hotel} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
