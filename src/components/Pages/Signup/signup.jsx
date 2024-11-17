import React, { useState } from 'react';
import account_icon from "../../Assets/account.jpg";
import email_icon from "../../Assets/email.webp";
import password_icon from "../../Assets/password.png";
import Validation1 from './signupValidation';
import axios from 'axios';
import "C:/Program Files/Sublime Text/Web_blog/frontend/src/components/Pages/login-signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    Name: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationErrors = Validation1(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8081/signup', values);
        setMessage(response.data.message);
      } catch (err) {
        setMessage("Signup failed!");
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSignup}>
        <div className="input">
          <img src={account_icon} alt="account" />
          <input
            type="text"
            placeholder="Name"
            name="Name"
            value={values.Name}
            onChange={handleChange}
          />
        </div>
        {errors.Name && <span className="text-danger">{errors.Name}</span>}
        <div className="input">
          <img src={email_icon} alt="email" />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={values.Email}
            onChange={handleChange}
          />
        </div>
        {errors.Email && <span className="text-danger">{errors.Email}</span>}
        <div className="input">
          <img src={password_icon} alt="password" />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={values.Password}
            onChange={handleChange}
          />
        </div>
        {errors.Password && (
          <span className="text-danger">{errors.Password}</span>
        )}
        <div className="submit-container">
          <button type="submit" className="appear">Sign Up</button>
          <button
            type="button"
            className="appear gray"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Signup;
