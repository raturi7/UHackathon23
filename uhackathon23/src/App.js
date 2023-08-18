import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Gallery from "./pages/Gallery/Gallery";
import ScrollOnTop from './pages/SOT/ScrollOnTop';
import Problem from "./pages/problem statement/Problem"
import Result from "./Components/Result/Result.jsx";



function App() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  return (
    <Router>
          <ScrollOnTop/>
      <div className="App" style={{ position: "relative", overflow: "hidden" }}>
        <Navbar />

        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
        <div className="ellipse4"></div>
        <div className="ellipse5"></div>
        <div className="ellipse6"></div>

        <div className="content-container ">

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gallery" element={<Gallery />} />
          <Route path="/problem-statements" element={<Problem/>} />
          <Route path="/result" element={<Result/>}/>
          </Routes>
        </div>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
