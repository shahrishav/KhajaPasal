import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MAPBOX_TOKEN = "pk.eyJ1Ijoicm9hZHdheW1hbiIsImEiOiJjbGY3ejR3ZjkwYnlrM3NudjJkYzgxcnRtIn0.jdReqoWAgSK93Ruy1iPRSQ";

const LocationPage = () => {
    const [hotels, setHotels] = useState([]);
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        fetchHotels();
        getUserLocation();
    }, []);

    // Fetch all hotels
    const fetchHotels = async () => {
        try {
            const response = await fetch("http://localhost:5500/api/hotels/"); // Endpoint for fetching hotels
            const data = await response.json();
            setHotels(data.hotels || []);
        } catch (error) {
            toast.error("Error fetching hotels");
            console.error(error);
        }
    };

    // Get user's current location
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoordinates({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                () => {
                    toast.error("Error fetching location");
                }
            );
        } else {
            toast.error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <>
            <style>
                {`
          .hotel-container {
            min-width: 300px;
            flex-shrink: 0;
            border: 1px solid #e5e7eb; /* Light gray border */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .hotel-container:hover {
            transform: scale(1.05); /* Slight zoom effect on hover */
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow */
          }

          .hotel-image {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-bottom: 1px solid #e5e7eb; /* Separator */
          }

          .hotel-content {
            padding: 16px;
            font-family: 'Arial', sans-serif;
          }

          .hotel-name {
            font-size: 1.25rem; /* 20px */
            font-weight: bold;
            color: #1f2937; /* Dark gray */
            margin-bottom: 8px;
          }

          .hotel-description {
            font-size: 0.875rem; /* 14px */
            color: #6b7280; /* Gray */
            margin-bottom: 8px;
          }

          .hotel-contact {
            font-size: 0.875rem; /* 14px */
            font-weight: medium;
            color: #4b5563; /* Slightly darker gray */
          }

          .hotel-location {
            font-size: 0.75rem; /* 12px */
            color: #9ca3af; /* Light gray */
            margin-top: 8px;
          }

          .hotel-list {
            display: flex;
            overflow-x: auto;
            gap: 1.5rem;
            scrollbar-width: thin;
            scrollbar-color: #d1d5db #f3f4f6; /* Custom scrollbar colors */
          }

          .hotel-list::-webkit-scrollbar {
            height: 8px;
          }

          .hotel-list::-webkit-scrollbar-thumb {
            background-color: #d1d5db; /* Gray thumb */
            border-radius: 8px;
          }

          .hotel-list::-webkit-scrollbar-track {
            background-color: #f3f4f6; /* Light track */
          }
        `}
            </style>

            <div
                className="container mx-auto my-8 px-4 py-8 rounded-lg shadow-md"
                style={{
                    backgroundColor: "#F8E1D0", // Matching soft peach background
                }}
            >
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
                    Hotels Near You
                </h1>

                {/* Map Section */}
                <div className="border border-gray-300 rounded-lg p-4 shadow-lg bg-white mb-8">
                    {coordinates ? (
                        <Map
                            initialViewState={{
                                longitude: coordinates.longitude,
                                latitude: coordinates.latitude,
                                zoom: 14,
                            }}
                            style={{ width: "100%", height: 500 }}
                            mapStyle="mapbox://styles/mapbox/streets-v11"
                            mapboxAccessToken={MAPBOX_TOKEN}
                            collectResourceTiming={false}
                        >
                            {/* User Location Marker */}
                            <Marker
                                longitude={coordinates.longitude}
                                latitude={coordinates.latitude}
                                anchor="bottom"
                            >
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="red" />
                            </Marker>

                            {/* Hotel Markers */}
                            {hotels.map(
                                (hotel) =>
                                    hotel.location &&
                                    hotel.location.coordinates && (
                                        <Marker
                                            key={hotel._id}
                                            longitude={hotel.location.coordinates[0]} // Assuming location is a GeoJSON-like object
                                            latitude={hotel.location.coordinates[1]}
                                            anchor="bottom"
                                        >
                                            <div className="relative">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="blue" />
                                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-white text-sm text-gray-800 p-1 rounded shadow-lg">
                                                    {hotel.name || "Hotel"}
                                                </div>
                                            </div>
                                        </Marker>
                                    )
                            )}
                        </Map>
                    ) : (
                        <p className="text-center text-gray-500">Fetching your location...</p>
                    )}
                </div>

                {/* Hotel List Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-700">All Hotels</h2>
                    <div className="hotel-list">
                        {hotels.map((hotel) => (
                            <div key={hotel._id} className="hotel-container">
                                <img
                                    src={hotel.imageUrl}
                                    alt={hotel.name}
                                    className="hotel-image"
                                />
                                <div className="hotel-content">
                                    <h3 className="hotel-name">{hotel.name}</h3>
                                    <p className="hotel-description">
                                        {hotel.description || "No description available"}
                                    </p>
                                    <p className="hotel-contact">
                                        Contact: {hotel.contact || "Not provided"}
                                    </p>
                                    {hotel.location?.coordinates && (
                                        <p className="hotel-location">
                                            Location: {hotel.location.coordinates[1].toFixed(2)},{" "}
                                            {hotel.location.coordinates[0].toFixed(2)}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationPage;
