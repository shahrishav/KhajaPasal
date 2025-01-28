// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const AddHotel = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         location: "",
//         description: "",
//         contact: "",
//     });
//     const [image, setImage] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!image) {
//             toast.error("Please upload an image.");
//             return;
//         }

//         const data = new FormData();
//         data.append("name", formData.name);
//         data.append("location", formData.location);
//         data.append("description", formData.description);
//         data.append("contact", formData.contact);
//         data.append("image", image);

//         try {
//             const response = await fetch("http://localhost:5500/api/hotels", {
//                 method: "POST",
//                 body: data,
//             });

//             if (response.ok) {
//                 toast.success("Hotel added successfully!");
//                 setFormData({
//                     name: "",
//                     location: "",
//                     description: "",
//                     contact: "",
//                 });
//                 setImage(null);
//             } else {
//                 const errorData = await response.json();
//                 toast.error(errorData.message || "Failed to add hotel.");
//             }
//         } catch (error) {
//             toast.error("Server error. Please try again later.");
//         }
//     };

//     return (
//         <div className="add-hotel-page">
//             <h2>Add Hotel</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Location</label>
//                     <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description</label>
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                     ></textarea>
//                 </div>
//                 <div>
//                     <label>Contact</label>
//                     <input
//                         type="text"
//                         name="contact"
//                         value={formData.contact}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Image</label>
//                     <input type="file" onChange={handleImageChange} required />
//                 </div>
//                 <button type="submit">Add Hotel</button>
//             </form>
//         </div>
//     );
// };

// export default AddHotel;

import React, { useState } from "react";
import { toast } from "react-toastify";
import "./AddHotel.css"; // Import the CSS file for styling

const AddHotel = () => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: "",
        contact: "",
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Please upload an image.");
            return;
        }

        const data = new FormData();
        data.append("name", formData.name);
        data.append("location", formData.location);
        data.append("description", formData.description);
        data.append("contact", formData.contact);
        data.append("image", image);

        try {
            const response = await fetch("http://localhost:5500/api/hotels", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                toast.success("Hotel added successfully!");
                setFormData({
                    name: "",
                    location: "",
                    description: "",
                    contact: "",
                });
                setImage(null);
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Failed to add hotel.");
            }
        } catch (error) {
            toast.error("Server error. Please try again later.");
        }
    };

    return (
        <div className="add-hotel-page">
            <h2 className="add-hotel-title">Add Hotel</h2>
            <form onSubmit={handleSubmit} className="add-hotel-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-input"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" onChange={handleImageChange} required className="form-input" />
                </div>
                <button type="submit" className="submit-button">
                    Add Hotel
                </button>
            </form>
        </div>
    );
};

export default AddHotel;

