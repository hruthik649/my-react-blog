// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate back to home

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/">Go to Home Page</Link> {/* Link to the root path */}
    </div>
  );
}

export default NotFound;