import React, { useEffect, useState } from "react";
import FoodCard from "../../component/common/FoodCard"; // Reusable FoodCard Component
import HotelCard from "../../component/common/HotelCord"; // Reusable HotelCard Component
import "./HomePage.css";

const HomePage = () => {
  const [foods, setFoods] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch foods
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/foods");
        const data = await response.json();
        setFoods(data.foods || []);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    // Fetch hotels
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/hotels");
        const data = await response.json();
        setHotels(data.hotels || []);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchFoods();
    fetchHotels();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
      <img
          src="/src/assets/banner.png"
          alt="Delicious Food"
          className="hero-image"
        />
      </header>

      {/* Explore Menu */}
      <section className="explore-menu">
        <h2 className="section-title">Explore Menu</h2>
        <div className="food-grid">
          {foods.slice(0, 5).map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      </section>

      {/* Most Visited */}
      <section className="most-visited">
        <h2 className="section-title">Most Visited</h2>
        <div className="hotel-grid">
          {hotels.slice(0, 5).map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="logo-section">
            <h3>Khaja Pasal</h3>
            <p>© 2024 Khaja Ghar, All Rights Reserved</p>
          </div>
          <div className="contact-section">
            <h4>Contact Us</h4>
            <p>Tel: +977-9856345689</p>
            <p>Email: info@gharmaisewa.com</p>
          </div>
          <div className="social-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

// import React, { useEffect, useState } from "react";
// import FoodCard from "../../component/common/FoodCard"; // Reusable FoodCard Component
// import HotelCard from "../../component/common/HotelCord"; // Reusable HotelCard Component
// import "./HomePage.css";

// const HomePage = () => {
//   const [foods, setFoods] = useState([]);
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     // Fetch foods
//     const fetchFoods = async () => {
//       try {
//         const response = await fetch("http://localhost:5500/api/foods");
//         const data = await response.json();
//         // Append local image paths for food items
//         const updatedFoods = data.foods.map((food) => ({
//           ...food,
//           imageUrl: require(`../../assets/foods/${food.image}`),
//         }));
//         setFoods(updatedFoods || []);
//       } catch (error) {
//         console.error("Error fetching foods:", error);
//       }
//     };

//     // Fetch hotels
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch("http://localhost:5500/api/hotels");
//         const data = await response.json();
//         // Append local image paths for hotel items
//         const updatedHotels = data.hotels.map((hotel) => ({
//           ...hotel,
//           imageUrl: require(`../../assets/hotels/${hotel.image}`),
//         }));
//         setHotels(updatedHotels || []);
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       }
//     };

//     fetchFoods();
//     fetchHotels();
//   }, []);

//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <header className="hero-section">
//         <img
//           src="/src/assets/banner.png"
//           alt="Delicious Food"
//           className="hero-image"
//         />
//       </header>

//       {/* Explore Menu */}
//       <section className="explore-menu">
//         <h2 className="section-title">Explore Menu</h2>
//         <div className="food-grid">
//           {foods.slice(0, 5).map((food) => (
//             <FoodCard key={food._id} food={food} />
//           ))}
//         </div>
//       </section>

//       {/* Most Visited */}
//       <section className="most-visited">
//         <h2 className="section-title">Most Visited</h2>
//         <div className="hotel-grid">
//           {hotels.slice(0, 5).map((hotel) => (
//             <HotelCard key={hotel._id} hotel={hotel} />
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="logo-section">
//             <h3>Khaja Pasal</h3>
//             <p>© 2024 Khaja Ghar, All Rights Reserved</p>
//           </div>
//           <div className="contact-section">
//             <h4>Contact Us</h4>
//             <p>Tel: +977-9856345689</p>
//             <p>Email: info@gharmaisewa.com</p>
//           </div>
//           <div className="social-section">
//             <h4>Follow Us</h4>
//             <div className="social-icons">
//               <a href="#">Facebook</a>
//               <a href="#">Instagram</a>
//               <a href="#">Twitter</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
