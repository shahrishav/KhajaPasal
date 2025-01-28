// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import FoodCard from "../../component/common/FoodCard"; // Reusable FoodCard Component
// import "./ViewFood.css"; // CSS scoped to ViewFood page

// const ViewFood = () => {
//     const [foods, setFoods] = useState([]);
//     const [filteredFoods, setFilteredFoods] = useState([]);
//     const [activeCategory, setActiveCategory] = useState("All");

//     useEffect(() => {
//         // Fetch all food items
//         const fetchFoods = async () => {
//             try {
//                 const response = await fetch("http://localhost:5500/api/foods");
//                 const data = await response.json();
//                 if (response.ok) {
//                     setFoods(data.foods);
//                     setFilteredFoods(data.foods);
//                 } else {
//                     toast.error(data.message || "Failed to fetch foods.");
//                 }
//             } catch (error) {
//                 toast.error("Server error. Please try again later.");
//             }
//         };

//         fetchFoods();
//     }, []);

//     const categories = ["All", "Snacks", "Main Dishes", "Drinks", "Desserts"];

//     const handleCategoryChange = (category) => {
//         setActiveCategory(category);
//         if (category === "All") {
//             setFilteredFoods(foods);
//         } else {
//             setFilteredFoods(foods.filter((food) => food.category === category));
//         }
//     };

//     return (
//         <div className="view-food-page">
//             <header className="header">
//                 <h2>Our Menu</h2>
//             </header>

//             {/* Category Filter */}
//             <div className="category-filter">
//                 {categories.map((category) => (
//                     <button
//                         key={category}
//                         onClick={() => handleCategoryChange(category)}
//                         className={`category-button ${activeCategory === category ? "active" : ""
//                             }`}
//                     >
//                         {category}
//                     </button>
//                 ))}
//             </div>

//             {/* Food Cards */}
//             {filteredFoods.length === 0 ? (
//                 <p className="no-food">No food items found.</p>
//             ) : (
//                 <div className="food-grid">
//                     {filteredFoods.map((food) => (
//                         <FoodCard key={food._id} food={food} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ViewFood;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FoodCard from "../../component/common/FoodCard"; // Reusable FoodCard Component
import "./ViewFood.css"; // Scoped CSS for ViewFood page

const ViewFood = () => {
    const [foods, setFoods] = useState([]);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        // Fetch all food items
        const fetchFoods = async () => {
            try {
                const response = await fetch("http://localhost:5500/api/foods");
                const data = await response.json();
                if (response.ok) {
                    setFoods(data.foods);
                    setFilteredFoods(data.foods);
                } else {
                    toast.error(data.message || "Failed to fetch foods.");
                }
            } catch (error) {
                toast.error("Server error. Please try again later.");
            }
        };

        fetchFoods();
    }, []);

    const categories = ["All", "Snacks", "Main Dishes", "Drinks", "Desserts"];

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredFoods(foods);
        } else {
            setFilteredFoods(foods.filter((food) => food.category === category));
        }
    };

    return (
        <div className="view-food-page">
            <header className="header">
                <h2>Our Menu</h2>
            </header>

            {/* Category Filter */}
            <div className="category-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`category-button ${activeCategory === category ? "active" : ""
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Food Cards */}
            {filteredFoods.length === 0 ? (
                <p className="no-food">No food items found.</p>
            ) : (
                <div className="food-grid">
                    {filteredFoods.map((food) => (
                        <FoodCard key={food._id} food={food} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewFood;
