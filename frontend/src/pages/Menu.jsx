// Menu Page
import React, { useState, useEffect } from "react";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/menu");
        if (response.ok) {
          const data = await response.json();
          setMenuItems(data);
        } else {
          console.error("Failed to fetch menu items.");
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="menu-page">
      <h2>Menu</h2>
      <div className="menu-list">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price:</strong> ${item.price}</p>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
