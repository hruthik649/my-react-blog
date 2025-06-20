// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Header() {
  return (
    <header>
      <h1>My Awesome React Blog</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;