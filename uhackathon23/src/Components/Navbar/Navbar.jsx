import React, { useEffect, useState } from 'react'
import upesLogo from '../Images/uhacklogo1.png'
import upesWhiteLogo from '../Images/uhacklogowhite1.png'
import './Navbar.css'
const Navbar = () => {
  const [img, setImg] = useState(upesWhiteLogo);
  const [color, setColor] = useState("white");
  const [clicked,setClicked]=useState(false);
  const [background, setBackground] = React.useState("transparent");
  const handleScroll = () => {
    const navbar = document.body.scrollTop
    if (navbar !== 0) {
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
    <nav className="navbar fixed-top navbar-expand-lg " style={{ backgroundColor: background }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={img} alt="Bootstrap" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{
          setBackground("white")
          setColor("black")
          setImg(upesLogo)
          if(clicked)
          {
            setClicked(false)
          document.body.style.overflowY="visible"
          }
          else{
            setClicked(true)
            document.body.style.overflowY="hidden"
          }
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" height={32} width={32} viewBox="0 0 512 512" style={{fill:color}}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" style={{color:color}}/></svg>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav" >
            <a className="nav-link active" aria-current="page" href="/" style={{ color: color }}>Home</a>
            <a className="nav-link" href="/About" style={{ color: color }}>About</a>
            <a className="nav-link" href="/Gallery" style={{ color: color }}>Gallery</a>
            <a className="nav-link" href="/Contact" style={{ color: color }}>Contact</a>
            <button className='nav-link join-btn'>Join Us</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
