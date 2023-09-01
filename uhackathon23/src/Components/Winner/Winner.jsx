import React,{useState} from 'react'
import './Winner.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import img from '../../'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import imgWinner from '../../pages/Gallery/IMAGES/img (1).avif'
export default function Winner() {

  return (
    <>
    <Navbar/>
    <div className='d-flex winner-outer container-fluid'>
     <div className="winner-inner container d-flex align-items-center justify-content-center gap-5">
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" id='two'>
            <div className="winner-img"><img src={imgWinner} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#2</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>Agni Studios</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT001</div>
              </div>
              </div>
        </div>
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" id='one'>
            <div className="winner-img"><img src={imgWinner} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#1</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>Agni Studios</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT001</div>
              </div>
              </div>
        </div>
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" id='three'>
            <div className="winner-img"><img src={imgWinner} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#3</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>Agni Studios</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT001</div>
              </div>
              </div>
        </div>
     </div>
    </div>
    <Footer/>
    </>
  )
}
