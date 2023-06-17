import React from 'react'
import upesLogo from '../Images/uhacklogo1.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container">
    <a className="navbar-brand" href="/">
    <img src={upesLogo} alt="Bootstrap"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/">About</a>
        <a className="nav-link" href="/">Gallery</a>
        <a className="nav-link" href="/">Contact</a>
        <button className='nav-link join-btn'>Join Us</button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
