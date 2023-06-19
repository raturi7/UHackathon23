import React, { useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Problem from "./pages/Problem Statements/Problem";
import Login from "./pages/Login/Login";
import Gallery from "./pages/Gallery/Gallery";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App" style={{ position: "relative", overflow: "hidden" }}>
        <Navbar />

        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
        <div className="ellipse4"></div>
        <div className="ellipse5"></div>
        <div className="ellipse6"></div>

        <div className="content-container">
          <ScrollToTopOnMount />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
