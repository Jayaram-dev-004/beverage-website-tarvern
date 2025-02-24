import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import logo from '../../assets/logo.png';
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await axios.post("https://127.0.0.1/login", formData);
      
      if (response.status === 200) {
        alert("Login successful! Redirecting...");
        navigate("/admin/adminpage"); 
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h2 className="login-title">
        Welcome Back to <span className="highlight">Tavern</span>!
      </h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          className="login-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="login-label">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          className="login-input"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="login-signup-text">
        Don't have an account?{" "}
        <span className="login-signup-link" onClick={() => navigate("/admin/signup")}>
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;