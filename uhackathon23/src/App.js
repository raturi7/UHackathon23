import './App.css';
import { BrowserRouter as Router, Route,  BrowserRouter,Routes } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    
      <div className="App">
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={<Contact/>} />
          </Routes>
          
       
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
        <div className="ellipse4"></div>
        <div className="ellipse5"></div>
        <div className="ellipse6"></div>
        
      </div>
      </BrowserRouter>
    
   
  );
}

export default App;
