// import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Navbar from "./component/Navbar/Navbar";
// import AddFood from "./pages/Food/AddFood";
// import FoodDetail from "./pages/Food/Fooddetail";
// import ViewFood from "./pages/Food/ViewFood";
// import HomePage from "./pages/Homepage/HomePage";
// import AddHotelPage from "./pages/Hotel/AddHotelPage";
// import HotelDetails from "./pages/Hotel/HotelDetails";
// import HotelList from "./pages/Hotel/ListHotel";
// import LocationPage from "./pages/Location/Location";
// import LoginPage from "./pages/Login/LoginPage";
// import EditProfile from "./pages/Profile/EditProfile";
// import Profile from "./pages/Profile/Profile";
// import SignupPage from "./pages/SignUp/SignupPage";
// import AdminRoutes from "./protected/AdminRoute";
// import UserRoutes from "./protected/UserRoutes";

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Navbar displayed across all pages */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/menu" element={<ViewFood />} />
//         <Route path="/locations" element={<LocationPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/hotels" element={<HotelList />} />
//         <Route path="/food/:id" element={<FoodDetail />} />
//         <Route path="/hotels/:id" element={<HotelDetails />} />

//         {/* User Routes */}
//         <Route element={<UserRoutes />}>
//           <Route path="/editprofile" element={<EditProfile />} />
//           <Route path="/profile" element={<Profile />} />
//         </Route>
//         {/* Admin Routes */}

//         <Route element={<AdminRoutes />}>
//           <Route path="/add-food" element={<AddFood />} />
//           <Route path="/hotel" element={<AddHotelPage />} />
//         </Route>

//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Navbar from "./component/Navbar/Navbar";
import AddFood from "./pages/Food/AddFood";
import FoodDetail from "./pages/Food/Fooddetail";
import ViewFood from "./pages/Food/ViewFood";
import HomePage from "./pages/Homepage/HomePage";
import AddHotelPage from "./pages/Hotel/AddHotelPage";
import HotelDetails from "./pages/Hotel/HotelDetails";
import HotelList from "./pages/Hotel/ListHotel";
import LocationPage from "./pages/Location/Location";
import LoginPage from "./pages/Login/LoginPage";
import EditProfile from "./pages/Profile/EditProfile";
import Profile from "./pages/Profile/Profile";
import SignupPage from "./pages/SignUp/SignupPage";
import AdminRoutes from "./protected/AdminRoute";
import UserRoutes from "./protected/UserRoutes";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar displayed across all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<ViewFood />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/food/:id" element={<FoodDetail />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/hotels/:id" element={<HotelDetails />} />

        {/* User Routes */}
        <Route element={<UserRoutes />}>
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/hotel" element={<AddHotelPage />} />
        </Route>
      </Routes>

      {/* ToastContainer for toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
