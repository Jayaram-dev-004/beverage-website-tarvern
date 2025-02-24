import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import logo from '../../assets/logo.png';
import "./SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post("https://127.0.0.1/signup", formData);
      
      if (response.status === 201) {
        alert("Sign-up successful! Redirecting...");
        navigate("/admin/adminpage"); 
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      alert(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="signin-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h2 className="signin-title">
        Streamline, Monitor, Serve <br />
        Your <span className="highlight">Bar</span>, Your <span className="highlight">Rules</span>!
      </h2>

      <form className="signin-form" onSubmit={handleSubmit}>
        <label className="signin-label">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name.."
          className="signin-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="signin-label">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          className="signin-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="signin-label">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          className="signin-input"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label className="signin-label">Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Enter your location..."
          className="signin-input"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <button type="submit" className="signin-button" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <p className="signin-login-text">
        Already have an account?{" "}
        <span className="signin-login-link" onClick={() => navigate("/admin/login")}>
          Log in
        </span>
      </p>
    </div>
  );
}

export default SignIn;