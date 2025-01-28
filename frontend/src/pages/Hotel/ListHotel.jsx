// import React, { useEffect, useState } from "react";

// const HotelList = () => {
//     const [hotels, setHotels] = useState([]);

//     useEffect(() => {
//         const fetchHotels = async () => {
//             try {
//                 const response = await fetch("http://localhost:5500/api/hotels");
//                 const data = await response.json();
//                 setHotels(data.hotels);
//             } catch (error) {
//                 console.error("Error fetching hotels:", error);
//             }
//         };

//         fetchHotels();
//     }, []);

//     return (
//         <div className="hotel-list">
//             <h2>Hotels</h2>
//             <div>
//                 {hotels.map((hotel) => (
//                     <div key={hotel._id} className="hotel-card">
//                         <img src={hotel.imageUrl} alt={hotel.name} />
//                         <h3>{hotel.name}</h3>
//                         <p>{hotel.location}</p>
//                         <p>{hotel.description}</p>
//                         <p>{hotel.contact}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HotelList;

import React, { useEffect, useState } from "react";
import HotelCard from "../../component/common/HotelCord"; // Reusable HotelCard Component
import "./HotelList.css";

const HotelList = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch("http://localhost:5500/api/hotels");
                const data = await response.json();
                setHotels(data.hotels);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            }
        };

        fetchHotels();
    }, []);

    return (
        <div className="hotel-list">
            <h2 className="hotel-list-title">Hotels</h2>
            <div className="hotel-grid">
                {hotels.map((hotel) => (
                    <HotelCard key={hotel._id} hotel={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HotelList;
