import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../../component/common/FoodCard"; // Import the reusable FoodCard component
import "./HotelDetails.css";

const HotelDetails = () => {
    const { id } = useParams(); // Get hotel ID from URL
    const [hotel, setHotel] = useState(null);
    const [foods, setFoods] = useState([]); // State to store food items

    useEffect(() => {
        const fetchHotelDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5500/api/hotels/${id}`);
                const data = await response.json();
                setHotel(data.hotel);
            } catch (error) {
                console.error("Error fetching hotel details:", error);
            }
        };

        const fetchFoodsByHotel = async () => {
            try {
                const response = await fetch(`http://localhost:5500/api/foods/hotel/${id}`);
                const data = await response.json();
                if (response.ok) {
                    setFoods(data.foods);
                } else {
                    console.error("Error fetching foods:", data.message);
                }
            } catch (error) {
                console.error("Error fetching foods:", error);
            }
        };

        fetchHotelDetails();
        fetchFoodsByHotel();
    }, [id]);

    if (!hotel) {
        return <p>Loading hotel details...</p>;
    }

    return (
        <div className="hotel-details">
            {/* Hotel Details Section */}
            <img src={hotel.imageUrl} alt={hotel.name} className="hotel-details-image" />
            <h2 className="hotel-details-title">{hotel.name}</h2>
            <p className="hotel-details-location">Location: {hotel.location}</p>
            <p className="hotel-details-description">{hotel.description}</p>
            <p className="hotel-details-contact">Contact: {hotel.contact}</p>

            {/* Food Items Section */}
            <div className="hotel-foods">
                <h3 className="hotel-foods-title">Available Food Items</h3>
                {foods.length === 0 ? (
                    <p>No food items available for this hotel.</p>
                ) : (
                    <div className="food-grid">
                        {foods.map((food) => (
                            <FoodCard key={food._id} food={food} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HotelDetails;
