// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// Make sure this line is correct:
import App from './App.jsx';
// ADD THIS LINE
import './App.css'; // This will be our global stylesheet

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);