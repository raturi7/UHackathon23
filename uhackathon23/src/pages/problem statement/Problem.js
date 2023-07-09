import React, { useRef ,useState} from "react";
import "./Problem.css";
import Heading from "../../Components/Heading/Heading";
import logo from './Images/MarshMcLennan.png'
import data from "./statement.json";

const Problem = () => {


  const [ps,setPs]=useState({});
  const modalRef = useRef(null);
 
  const [keys,setKeys]=useState([])
  const [values,setValues]=useState([])

  function printData() {
    let i = 0;
    let htmlData = [];
    for (i = 0; i < keys.length; i++) {
      const htmlString = `<p style="marginBottom: 8px;text-align:justify" className="blue-title"><b style="color: #0043ce;">${keys[i]}:</b> <b>${values[i]}</b></p>`;
      htmlData.push(React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlString } }));
    }
    return htmlData;
  }
  
//   function printData(){
//     let i=0;
//     let data=""
//     for(i=0;i<keys.length;i++)
// {
//    data+=`<p style={{marginBottom:"8px"}} className="blue-title"><b style={{color:"#0043ce"}}>${keys[i]}</b> <b>${values[i]}</b></p>`
// }
// return data;
//   }

  const openModal =  () => {
    const modalElement = modalRef.current;
    modalElement.style.display = "flex";
  };

  const handleCloseModal = () => {
    const modalElement = modalRef.current;
    modalElement.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modalRef.current) {
      modalRef.current.style.display = "none";
    }
  };

  function psCard(data) {
    return (
      <div className="col-4 card-container">
        <button
          className="card d-flex flex-row align-items-center justify-content-start p-3 pl-4 gap-4 w-100"
          onClick={async ()=>{
           setPs(data)
           setKeys(Object.keys(data))
           setValues(Object.values(data))
            openModal(data)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"/></svg>
          <div className="card-content d-flex flex-column align-items-start justify-content-center gap-2" > 
          <div className="title-ps">
            <h5
              style={{ fontWeight: "600", color: "#2E2545", textAlign: "left",maxHeight:"40px",marginBottom:"0px"}} 
            >
              {data.Title}
            </h5>
            </div>
            <h6 style={{ fontWeight: "600", color: "#8585BD" }}>{"UHACK01"}</h6>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="container problem-statement-card two-margin-top">
      <div ref={modalRef} className="modal">
        {/* Modal content */}
        <div className="modal-content">
          <div className="d-flex justify-content-center">
          <img src={logo} alt="" className="comp-logo"/>
          </div>
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
   
<section className="d-flex align-items-start justify-content-center p-4 flex-column" style={{textAlign:"left"}}>
            <h6 className="mb-4 ps-number" style={{ fontWeight: "600" }}>
              {"PS NUMBER: "+ps.id}
            </h6>
            {printData()}
          </section> 
        </div>
      </div>

      <Heading text="Problem Statements" position="center"></Heading>

      <div className="d-flex flex-row ps-box">
        {data.map((element) => {
          return psCard(element);
        })}
      </div>
    </div>
  );
};

export default Problem;