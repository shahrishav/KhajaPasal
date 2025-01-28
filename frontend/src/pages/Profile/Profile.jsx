import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch user data from local storage and server
        const fetchUserData = async () => {
            const loggedInUser = JSON.parse(localStorage.getItem("user"));

            if (loggedInUser?.id) {
                try {
                    const response = await axios.get(
                        `http://localhost:5500/api/users/getSingleUser/${loggedInUser.id}`
                    );
                    setUser(response.data.user);
                    setError(null);
                } catch (err) {
                    console.error("Error fetching user data:", err);
                    setError("Failed to fetch user data.");
                }
            } else {
                setError("No user is logged in.");
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <p style={styles.loadingText}>Loading...</p>;
    }

    if (error) {
        return <p style={styles.errorText}>{error}</p>;
    }

    if (!user) {
        return <p style={styles.errorText}>User not found.</p>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <h1 style={styles.title}>Profile</h1>
            </div>
            <div style={styles.card}>
                <div style={styles.profileImageContainer}>
                    <img
                        src={
                            user.photo ? `http://localhost:5500/${user.photo}` : "user.png"
                        }
                        alt="Profile"
                        style={styles.profileImage}
                    />
                </div>

                <div style={styles.details}>
                    <p style={styles.label}>First Name</p>
                    <p style={styles.value}>{user.firstName}</p>
                    <p style={styles.label}>Last Name</p>
                    <p style={styles.value}>{user.lastName}</p>
                    <p style={styles.label}>Email</p>
                    <p style={styles.value}>{user.email}</p>
                </div>

                <Link to="/editprofile">
                    <button style={styles.editProfileButton}>Edit Profile</button>
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8E1D0", // Matching light peach background
        height: "100vh",
        fontFamily: "'Arial', sans-serif",
    },
    titleContainer: {
        marginBottom: "20px",
    },
    title: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#6D4C41", // Dark brown color for the title
    },
    card: {
        backgroundColor: "#FFFFFF", // White card background
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
        width: "400px",
        textAlign: "center",
    },
    profileImageContainer: {
        position: "relative",
        marginBottom: "20px",
    },
    profileImage: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        backgroundColor: "#EAEAEA",
        objectFit: "cover",
        border: "2px solid #D7A778", // Soft brown border for profile image
    },
    editProfileButton: {
        backgroundColor: "#D7A778", // Soft brownish-orange button
        color: "#FFFFFF",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "20px",
        transition: "background-color 0.3s",
    },
    editProfileButtonHover: {
        backgroundColor: "#B87E5C", // Darker brown on hover
    },
    details: {
        textAlign: "left",
        marginTop: "20px",
    },
    label: {
        fontSize: "14px",
        color: "#555", // Dark gray for labels
        marginBottom: "5px",
    },
    value: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#000", // Black for user details
        marginBottom: "15px",
    },
    loadingText: {
        fontSize: "18px",
        color: "#555",
    },
    errorText: {
        fontSize: "16px",
        color: "red",
    },
};

export default Profile;
