// // // import React, { useState, useEffect } from "react";
// // // import "./Navbar.css";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const Navbar = () => {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // //   const [userName, setUserName] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     // Check login status from local storage
// // //     const user = JSON.parse(localStorage.getItem("user"));
// // //     if (user && user.firstName) {
// // //       setIsLoggedIn(true);
// // //       setUserName(user.firstName);
// // //     }
// // //   }, []);

// // //   const handleLoginClick = () => {
// // //     if (!isLoggedIn) {
// // //       navigate("/login");
// // //     } else {
// // //       navigate("/profile");
// // //     }
// // //   };

// // //   const handleLogout = () => {
// // //     // Clear local storage and update state
// // //     localStorage.removeItem("user");
// // //     localStorage.removeItem("token");
// // //     setIsLoggedIn(false);
// // //     setUserName("");
// // //     navigate("/");
// // //   };

// // //   return (
// // //     <header className="navbar">
// // //       <div className="navbar-logo">
// // //         <img
// // //           src="/assets/logo.png" // Ensure the logo is in the `public/assets` directory
// // //           alt="Khaja Pasal Logo"
// // //           className="navbar-logo-img"
// // //         />
// // //         <span className="navbar-title">Khaja Pasal</span>
// // //       </div>
// // //       <nav className="navbar-links">
// // //         <Link to="/" className="navbar-link">
// // //           Home
// // //         </Link>
// // //         <Link to="/menu" className="navbar-link">
// // //           Menu
// // //         </Link>
// // //         <Link to="/location" className="navbar-link">
// // //           Location
// // //         </Link>
// // //         <Link to="/offers" className="navbar-link">
// // //           Offers
// // //         </Link>
// // //         {isLoggedIn ? (
// // //           <div className="navbar-user">
// // //             <span className="navbar-user-name">Hello, {userName}</span>
// // //             <button className="navbar-button navbar-logout" onClick={handleLogout}>
// // //               Logout
// // //             </button>
// // //           </div>
// // //         ) : (
// // //           <button className="navbar-button navbar-login" onClick={handleLoginClick}>
// // //             Login / Register
// // //           </button>
// // //         )}
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;
// // // Navbar Component
// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [userName, setUserName] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const user = JSON.parse(localStorage.getItem("user"));
// //     if (user && user.firstName) {
// //       setIsLoggedIn(true);
// //       setUserName(user.firstName);
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     setIsLoggedIn(false);
// //     navigate("/");
// //   };

// //   return (
// //     <header className="navbar">
// //       <div className="navbar-logo">
// //         <img
// //           src="/assets/logo.png"
// //           alt="Khaja Pasal Logo"
// //           className="logo-image"
// //         />
// //         <span>Khaja Pasal</span>
// //       </div>
// //       <nav className="navbar-links">
// //         <Link to="/">Home</Link>
// //         <Link to="/menu">Menu</Link>
// //         <Link to="/location">Location</Link>
// //         <Link to="/offers">Offers</Link>
// //         {isLoggedIn ? (
// //           <div className="navbar-user">
// //             <span>Hello, {userName}</span>
// //             <button className="navbar-logout" onClick={handleLogout}>
// //               Logout
// //             </button>
// //           </div>
// //         ) : (
// //           <button
// //             className="navbar-login"
// //             onClick={() => navigate("/login")}
// //           >
// //             Login / Register
// //           </button>
// //         )}
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [userName, setUserName] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const user = JSON.parse(localStorage.getItem("user"));
// //     if (user && user.firstName) {
// //       setIsLoggedIn(true);
// //       setUserName(user.firstName);
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     setIsLoggedIn(false);
// //     navigate("/");
// //   };

// //   return (
// //     <header className="navbar">
// //       <div className="navbar-logo">
// //         <img
// //           src="/assets/logo.png"
// //           alt="Khaja Pasal Logo"
// //           className="navbar-logo-img"
// //         />
// //         <span className="navbar-title">Khaja Pasal</span>
// //       </div>
// //       <nav className="navbar-links">
// //         <Link to="/" className="navbar-link">
// //           Home
// //         </Link>
// //         <Link to="/menu" className="navbar-link">
// //           Menu
// //         </Link>
// //         <Link to="/location" className="navbar-link">
// //           Location
// //         </Link>
// //         <Link to="/offers" className="navbar-link">
// //           Offers
// //         </Link>
// //         {isLoggedIn ? (
// //           <div className="navbar-user">
// //             <span className="navbar-user-name">Hello, {userName}</span>
// //             <button
// //               className="navbar-button navbar-logout"
// //               onClick={handleLogout}
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         ) : (
// //           <button
// //             className="navbar-button navbar-login"
// //             onClick={() => navigate("/login")}
// //           >
// //             Login / Register
// //           </button>
// //         )}
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Get user info from localStorage
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.firstName) {
//       setIsLoggedIn(true);
//       setUserName(user.firstName);
//       setIsAdmin(user.isAdmin || false); // Check if the user is an admin
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     setDropdownOpen(false); // Close dropdown on logout
//     navigate("/");
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen); // Toggle dropdown state
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-logo">
//         <img
//           src="src/assets/logo.png"
//           alt="Khaja Pasal Logo"
//           className="navbar-logo-img"
//         />

//       </div>
//       <nav className="navbar-links">
//         <Link to="/" className="navbar-link">
//           Home
//         </Link>
//         <Link to="/menu" className="navbar-link">
//           Menu
//         </Link>
//         <Link to="/locations" className="navbar-link">
//           Location
//         </Link>
//         <Link to="/faq" className="navbar-link">
//           FAQ
//         </Link>
//         {isAdmin && (
//           <>
//             <Link to="/add-food" className="navbar-link">
//               Add Food
//             </Link>
//             <Link to="/hotel" className="navbar-link">
//               Add Hotels
//             </Link>
//           </>
//         )}
//         {isLoggedIn ? (
//           <div className="navbar-user">
//             <span
//               className="navbar-user-name"
//               onClick={toggleDropdown}
//               style={{ cursor: "pointer" }}
//             >
//               Hello, {userName}
//             </span>
//             {dropdownOpen && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item">
//                   Profile
//                 </Link>
//                 <Link to="/change-password" className="dropdown-item">
//                   Change Password
//                 </Link>
//                 <button
//                   className="dropdown-item logout-button"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button
//             className="navbar-button navbar-login"
//             onClick={() => navigate("/login")}
//           >
//             Login / Register
//           </button>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
    // Get user info from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.firstName) {
      setIsLoggedIn(true);
      setUserName(user.firstName);
      setIsAdmin(user.isAdmin || false); // Check if the user is an admin
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setDropdownOpen(false); // Close dropdown on logout
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown state
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // For now, just log the search query
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img
          src="src/assets/logo.png"
          alt="Khaja Pasal Logo"
          className="navbar-logo-img"
        />
      </div>
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/menu" className="navbar-link">
          Menu
        </Link>
        <Link to="/locations" className="navbar-link">
          Location
        </Link>
        <Link to="/faq" className="navbar-link">
          FAQ
        </Link>
        {isAdmin && (
          <>
            <Link to="/add-food" className="navbar-link">
              Add Food
            </Link>
            <Link to="/hotel" className="navbar-link">
              Add Hotels
            </Link>
          </>
        )}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        {isLoggedIn ? (
          <div className="navbar-user">
            <span
              className="navbar-user-name"
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            >
              Hello, {userName}
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
                <Link to="/change-password" className="dropdown-item">
                  Change Password
                </Link>
                <button
                  className="dropdown-item logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="navbar-button navbar-login"
            onClick={() => navigate("/login")}
          >
            Login / Register
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
