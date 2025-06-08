import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Awesome React Blog</p>
      <div className="social-links">
        <a href="https://github.com/hruthik649" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.instagram.com/hruthik004hk/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;