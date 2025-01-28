import React from "react";
import { useNavigate } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/hotels/${hotel._id}`);
    };

    return (
        <div className="hotel-card" onClick={handleCardClick}>
            <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
            <h3 className="hotel-name">{hotel.name}</h3>
        </div>
    );
};

export default HotelCard;
