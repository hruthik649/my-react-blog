// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'; // Import BrowserRouter, Routes, Route, Outlet
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer'; // Import your Footer component
import Home from './components/Home';     // Import your Home component
import About from './components/About';   // Import your About component
import Contact from './components/Contact'; // Import your Contact component
import NotFound from './components/NotFound'; // Import your NotFound component
import './App.css'; // Your global styles

// This component will contain your Header and Footer,
// and an <Outlet /> where the specific page content (Home, About, Contact) will render.
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where the content for the current route will be displayed */}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    // BrowserRouter enables client-side routing
    <BrowserRouter>
      {/* Routes defines the different paths in your application */}
      <Routes>
        {/* The base route, which uses our Layout component */}
        <Route path="/" element={<Layout />}>
          {/* index route: Renders Home component when path is exactly "/" */}
          <Route index element={<Home />} />
          {/* Specific routes for other pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* Catch-all route: Renders NotFound for any undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;