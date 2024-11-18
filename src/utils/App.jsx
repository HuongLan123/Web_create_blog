import React from 'react';
import Home from '../components/Pages/Home/Home.jsx';
import Navbar from '../components/Pages/Home/navbar.jsx';
import Login from '../components/Pages/Login/login.jsx';
import Signup from '../components/Pages/Signup/signup.jsx';
import ProfileInfo from '../components/Blog/Blog template/ProfileInfo.jsx';
import Navbar1 from '../components/Pages/Home/Home1.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/Pages/Home/Homepage.jsx'; 

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Navbar1 />} />
      <Route path="/pages" exact element={<Navbar />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/info" exact element={<ProfileInfo />} />

    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
  );
};

export default App;
