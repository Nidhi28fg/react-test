// File: src/components/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main className="home-content">
        <p>
          This is the home page of your application. Explore and enjoy your
          stay!
        </p>
      </main>
    </div>
  );
}
