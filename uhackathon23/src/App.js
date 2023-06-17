import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Footer from './Components/Footer/Footer';
import Sponsor from "./Components/Sponsor/Sponsor";

function App() {
  return (
    <Router>
      <div className="App" style={{position:"relative",overflow:"hidden"}}>
        <Navbar />

        <div className="ellipses-container">
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <div className="ellipse3"></div>
          <div className="ellipse4"></div>
          <div className="ellipse5"></div>
          <div className="ellipse6"></div>
        </div>

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Sponsor/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
