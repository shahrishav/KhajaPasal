// // Login Page
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5500/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.userData));
//         toast.success("Login successful!");
//         navigate("/");
//       } else {
//         toast.error(data.message || "Login failed.");
//       }
//     } catch (error) {
//       toast.error("Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5500/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userData));
        toast.success("Login successful!");
        navigate("/");
      } else {
        toast.error(data.message || "Login failed.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url('/src/assets/banner.png')`, // Use the path as you have in your "home-page"
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.link}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    width: "300px",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "20px",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    fontSize: "1rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff7f50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  link: {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#555",
  },
  signupLink: {
    color: "#ff7f50",
    textDecoration: "none",
  },
};

export default LoginPage;
