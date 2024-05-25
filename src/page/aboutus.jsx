// File: src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have some basic styling

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <header className="aboutus-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main className="Aboutus-content">
        <p>This is the home page of your application. Explore and enjoy your stay!</p>
        <nav className="Aboutus-nav">
          <Link to="/about" className="home-link">About</Link>
          <Link to="/contact" className="home-link">Contact</Link>
        </nav>
      </main>
    </div>
  );
};

export default Aboutus;
