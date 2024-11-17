import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Create New Blog
      </Link>
      <ul className={`nav__menu ${isMenuActive ? "nav__active" : ""}`}>
        <li className="nav__item">
          <NavLink to="/" className="nav__link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <div className="nav__link">Topic</div>
        </li>
        <li className="nav__item">
          <NavLink to="/login" className="nav__link" activeClassName="active">
            Account
          </NavLink>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className="nav__toggler"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuActive}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    </nav>
  );
}

export default Navbar;
