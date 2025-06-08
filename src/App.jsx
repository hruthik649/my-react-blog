import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './App.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    // BrowserRouter enables client-side routing, with basename for GitHub Pages
    <BrowserRouter basename="/my-react-blog/"> {/* <--- THIS IS THE CRUCIAL CHANGE */}
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