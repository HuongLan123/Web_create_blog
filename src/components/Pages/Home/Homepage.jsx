import React from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaBook } from 'react-icons/fa'; // Thêm icon
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src="https://thumb.ac-illust.com/26/2651eb206f542bd53f52d344f2a4b525_t.jpeg" alt="Blog Icon" className="blog-icon" /> {/* Icon Blog */}
        <h1 className="app-title">Create New Blog</h1>
        <p className="app-description">
          A simple and beautiful blogging platform to express your thoughts. Start writing your blog now!
        </p>
        <Link to="/post" className="get-started-btn">
          <FaPen /> Start Writing
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
