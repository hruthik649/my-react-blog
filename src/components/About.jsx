// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section className="about-section">
      <h2>About This Blog</h2>
      <p>This blog is a demonstration project built with React, Vite, and modern web development practices.</p>
      <p>It showcases my learning journey in HTML, CSS, JavaScript, and particularly the React framework, including functional components, state management, hooks (like `useState` and `useEffect`), routing with `react-router-dom`, and asynchronous data fetching.</p>
      <img src="https://via.placeholder.com/400x200?text=About+Image" alt="About the blog" className="about-image"/>
    </section>
  );
}

export default About;