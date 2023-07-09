import React, { useEffect, useState } from 'react'
import upesLogo from '../Images/uhacklogo1.png'
import upesWhiteLogo from '../Images/uhacklogowhite1.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


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
      <div className="container-fluid" style={{paddingLeft:"20px",paddingRight:"20px"}}>
        <a className="navbar-brand pt-0" href="/" style={{maxWidth:"260px",maxHeight:"60px"}}>
          <img src={img} alt="Bootstrap" style={{maxWidth:"265px"}}/>
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
          <div className="navbar-nav" style={{alignItems:"center"}}>
            <Link className="nav-link active" aria-current="page" to="/" style={{ color: color }}>Home</Link>
            <Link className="nav-link" to="/About" style={{ color: color }}>About</Link>
            <Link className="nav-link" to="/Gallery" style={{ color: color }}>Gallery</Link>
            <Link className="nav-link" to="/Contact" style={{ color: color }}>Contact</Link>
            <Link className="nav-link" to="/problem-statement" style={{ color: color }}>Problem Statement</Link>
            {/* <button  style={{textDecoration:"none"}} className='nav-link join-btn' data-hackathon-slug="uhackathon" >Join Us</button> */}
            <div 
	className="apply-button" 
	data-hackathon-slug="uhackathon"
	data-button-theme="light"
	// style="height: 44px; width: 312px"
></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
