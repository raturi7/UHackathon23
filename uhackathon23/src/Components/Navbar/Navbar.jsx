import React,{useEffect, useState} from 'react'
import upesLogo from '../Images/uhacklogo1.png'
import upesWhiteLogo from '../Images/uhacklogowhite1.png'
import './Navbar.css'
const Navbar = () => {
  const [img,setImg]=useState(upesWhiteLogo);
  const [color,setColor]=useState("white");
  const [background, setBackground] = React.useState("transparent");
  const handleScroll = () => {
    const navbar=document.body.scrollTop
      if(navbar!==0){
        setBackground("white")
      setImg(upesLogo)
      setColor("black")
      }
     else {
      setColor("white")
      setImg(upesWhiteLogo)
      setBackground("transparent")
    }
  };

  useEffect(() => {
   document.body.addEventListener("scroll", handleScroll);
  });
  return (
    <nav className="navbar fixed-top navbar-expand-lg " style={{backgroundColor:background}}>
  <div className="container">
    <a className="navbar-brand" href="/">
    <img src={img} alt="Bootstrap"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav" >
        <a className="nav-link active" aria-current="page" href="/" style={{color:color}}>Home</a>
        <a className="nav-link" href="/About" style={{color:color}}>About</a>
        <a className="nav-link" href="/Gallery" style={{color:color}}>Gallery</a>
        <a className="nav-link" href="/Contact" style={{color:color}}>Contact</a>
        <button className='nav-link join-btn'>Join Us</button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
