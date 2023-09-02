import React,{useState} from 'react'
import './Winner.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import imgWinner1 from '../../pages/Gallery/IMAGES/img (1).avif'
import imgWinner2 from '../../pages/Gallery/IMAGES/img (2).avif'
import imgWinner3 from '../../pages/Gallery/IMAGES/img (3).avif'
import Heading from '../Heading/Heading';


export default function Winner() {
  const [modalTeam,setModalTeam]=useState("one");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const ModalContent = ({content}) => {
    if(content === "one") {
      return (
        <div className='d-flex myModal-inner align-items-center justify-content-center gap-5'><img src={imgWinner2} alt='' /><div className='modal-content-text'><p className='team-name-modal'>Agni Studios</p><p className='team-id-modal'>UHCK_NT001</p><ul className='modal-team-name'><li>Lorem Lorem</li><li>Lorem Lorem</li><li>Lorem Lorem</li><li>Lorem Lorem</li></ul></div></div>
      )
    }
  else
    if(content === "two") {
      return (
        <div className='d-flex myModal-inner align-items-center justify-content-center gap-5'><img src={imgWinner1} alt='' /><div className='modal-content-text'><p className='team-name-modal'>Agni Studios</p><p className='team-id-modal'>UHCK_NT001</p><ul className='modal-team-name'><li>Lorem Lorem</li><li>Lorem Lorem</li><li>Lorem Lorem</li><li>Lorem Lorem</li></ul></div></div>
      )
    }
else
    if(content === "three") {
      return (
        <div className='d-flex myModal-inner align-items-center justify-content-center gap-5'><img src={imgWinner3} alt='' /><div className='modal-content-text'><p className='team-name-modal'>Agni Studios</p><p className='team-id-modal'>UHCK_NT001</p><ul className='modal-team-name'><li>Lorem Lorem</li><li>Lorem Lorem</li><li>Lorem Lorem</li><li>Lorem Lorem</li></ul></div></div>
      )
    }
  
    // etc...
  }
  return (
    <>
    <Navbar/>
    <div className="win">
    <Heading text="Winners" position="center"/>
    <div className='d-flex winner-outer container-fluid'>
     <div className="winner-inner container d-flex align-items-center justify-content-center gap-5">
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" onClick={function(){onOpenModal();setModalTeam("two")}} id='two'>
            <div className="winner-img"><img src={imgWinner1} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#2</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>Agni Studios</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT001</div>
              </div>
              </div>
        </div>
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" onClick={function(){onOpenModal();setModalTeam("one")}} id='one'>
            <div className="winner-img"><img src={imgWinner2} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#1</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>Agni Studios</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT001</div>
              </div>
              </div>
        </div>
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" onClick={function(){onOpenModal();setModalTeam("three")}} id='three'>
            <div className="winner-img"><img src={imgWinner3} alt="" /></div>
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
    <Modal open={open} onClose={onCloseModal} center classNames={{
          overlay: 'customOver',
          modal: 'myModal',
        }}>
      <ModalContent content={modalTeam} /> 
      </Modal>
      </div>
    <Footer/>
    </>
  )
}


