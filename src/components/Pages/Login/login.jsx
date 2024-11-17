import React, { useState } from "react";
import email_icon from "../../Assets/email.webp";
import password_icon from "../../Assets/password.png";
import Validation from "./loginValidation";
import axios from "axios";
import "../login-signup.css";

const Login = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (!validationErrors.Email && !validationErrors.Password) {
      try {
        const response = await axios.post("http://localhost:8081/login", values);
        setMessage(response.data.message);
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        setMessage(error.response?.data?.message || "An error occurred during login.");
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      {message && <p className="server-message">{message}</p>}
      <form className="inputs" onSubmit={handleLogin}>
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={values.Email}
            onChange={handleChange}
          />
          {errors.Email && <span className="text-danger">{errors.Email}</span>}
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={values.Password}
            onChange={handleChange}
          />
          {errors.Password && (
            <span className="text-danger">{errors.Password}</span>
          )}
        </div>
        <div className="submit-container">
          <button type="submit" className="appear">
            Login
          </button>
          <button
            type="button"
            className="appear gray"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
