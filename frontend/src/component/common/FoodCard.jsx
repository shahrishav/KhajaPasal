import React from "react";
import { useNavigate } from "react-router-dom";
import "./FoodCard.css"; // CSS scoped to FoodCard component

const FoodCard = ({ food }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/food/${food._id}`); // Navigate to FoodDetail page with food ID
    };

    return (
        <div className="food-card" onClick={handleCardClick}>
            <img src={food.imageUrl} alt={food.name} className="food-image" />
            <div className="food-details">
                <h3>{food.name}</h3>
                <p>Price: ${food.price}</p>
                <p>Category: {food.category}</p>
                <p>{food.description || "No description available"}</p>
                <p>Hotel: {food.hotel?.name || "Unknown"}</p>
            </div>
        </div>
    );
};

export default FoodCard;
