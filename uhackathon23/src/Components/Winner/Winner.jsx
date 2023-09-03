import React,{useState} from 'react'
import './Winner.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import imgWinner1 from '../Images/Winners.png'
import imgWinner2 from '../Images/FIRST RUNNER UP.png'
import imgWinner3 from '../Images/SECOND RUNNER UP.png'
import Heading from '../Heading/Heading';


export default function Winner() {
  const [modalTeam,setModalTeam]=useState("one");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const ModalContent = ({content}) => {
    if(content === "one") {
      return (
        <div className='d-flex myModal-inner align-items-center justify-content-center gap-5'><img src={imgWinner1} alt='' /><div className='modal-content-text'><p className='team-name-modal'>Hyperkin</p><p className='team-id-modal'>UHCK_NT053</p><ul className='modal-team-name'><li>Niramya Joshi</li><li>Kushagra Shreyashkar</li><li>Hardik Basera</li><li>Priyansh Kashyap</li></ul></div></div>
      )
    }
  else
    if(content === "two") {
      return (
        <div className='d-flex myModal-inner align-items-center justify-content-center gap-5'><img src={imgWinner2} alt='' /><div className='modal-content-text'><p className='team-name-modal'>THDCIHETians</p><p className='team-id-modal'>UHCK_NT043</p><ul className='modal-team-name'><li>Shivam Samant</li><li>Ishan Chauhan</li><li>Shivam Uttpal Jha</li><li> Ishan Shekhar</li></ul></div></div>
      )
    }
else
    if(content === "three") {
      return (
        <div className='d-flex myModal-inner align-items-center justify-content-center gap-5'><img src={imgWinner3} alt='' /><div className='modal-content-text'><p className='team-name-modal'>INEXIA</p><p className='team-id-modal'>UHCK_NT064</p><ul className='modal-team-name'><li>Aakash Gola</li><li>Prakhar Singh</li><li>Mayank Pratap Singh</li><li>Gagan Singh</li></ul></div></div>
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
            <div className="winner-img"><img src={imgWinner2} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#2</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>THDCIHETians</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT043</div>
              </div>
              </div>
        </div>
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" onClick={function(){onOpenModal();setModalTeam("one")}} id='one'>
            <div className="winner-img"><img src={imgWinner1} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#1</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>Hyperkin</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT053</div>
              </div>
              </div>
        </div>
        <div className="winner-card d-flex flex-column align-items-center justify-content-center" onClick={function(){onOpenModal();setModalTeam("three")}} id='three'>
            <div className="winner-img"><img src={imgWinner3} alt="" /></div>
            <div className="d-flex align-items-center w-100">
                <div className="position" style={{color:"white",marginLeft:"10px"}}>#3</div>
                <div>
            <div className="win-team-name" style={{color:"white"}}>INEXIA</div>
              <div className="win-tema-id" style={{color:"rgb(133, 133, 189)"}}>UHCK_NT064</div>
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


