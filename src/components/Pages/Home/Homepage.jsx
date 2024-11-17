import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaPaperPlane, FaShare, FaPen, FaLaptop, FaBook, FaBookmark, FaHeart } from 'react-icons/fa'; // Các icon
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="app-title">Create New Blog</h1>
        <p className="app-description">
          A simple and beautiful blogging platform to express your thoughts. Start writing your blog now!
        </p>
        <Link to="/post" className="get-started-btn">
          Start Writing
        </Link>
      </div>

      {/* Các icon động bao quanh giao diện */}
      <div className="icon-wrapper">
        <FaLaptop className="icon-wrapper1"/>
        <FaBook className="icon-wrapper2" />
        <FaBookmark className="icon-wrapper3"/>
        <FaHeart className="icon-wrapper4"/>
        <FaPen className="icon-wrapper5"/>
        <FaUser className="icon-wrapper6"/>
        <FaPaperPlane className="icon-wrapper7"/>
        <FaShare className="icon-wrapper8"/>
      </div>
    </div>
  );
}

export default HomePage;
