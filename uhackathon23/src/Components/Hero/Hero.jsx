import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='container d-flex  justify-content-center hero-container' style={{color:"#E4E4E4",textAlign:"left"}}>
      <div className="container content-text"><div className="d-flex flex-column align-items-start justify-content-center">
        <h4 className='text-uppercase' style={{letterSpacing:"0.2rem",fontWeight:"600"}}>Upes School of Computer Science</h4>
        <h5 style={{letterSpacing:"0.1rem"}}>PRESENTS</h5>
        <h1 className='title my-3'>UHackathon 4.0 <br />Meta Edition</h1>
        <h5 style={{letterSpacing:"0.1rem",lineHeight:"30px"}}>The 4th iteration of UPES Hackathon,<br /> UHackathon 4.0 META welcomes you!</h5>
        </div>
        </div>
      <div className="container vr-timer d-flex align-items-center justify-content-center flex-column">
        <h1 className='timer'>00:00:00:00</h1>
        <ul class="list-group list-group-horizontal mb-4">
  <li class="list-group-item">DAYS</li>
  <li class="list-group-item" >HOURS</li>
  <li class="list-group-item">MINUTES</li>
  <li class="list-group-item">SECONDS</li>
</ul>
      </div>
    </div>
  )
}

export default Hero
