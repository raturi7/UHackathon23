import React, { useRef ,useState} from "react";
import "./Problem.css";
import Heading from "../../Components/Heading/Heading";
import logo from './Images/MarshMcLennan.png'
import data from "./statement.json";


const Problem = () => {


  const [ps,setPs]=useState({});
  const [image,setImage]= useState("");
  const modalRef = useRef(null);
 
  const [keys,setKeys]=useState([])
  const [values,setValues]=useState([])

  function printData() {
    let i = 0;
    let htmlData = [];
    for (i = 1; i < keys.length; i++) {
        
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

 function psCard(data, index) {
  // Generate the problem ID
  const problemId = `UHACK${String(index + 1).padStart(3, "0")}`;
  
      
  return (
    <div className="col-4 card-container" key={data.id}>
      <button
        className="card d-flex flex-row align-items-center justify-content-start p-3 pl-4 gap-4 w-100"
        onClick={async () => {
          setPs(data);
          setImage(data.path);
          setKeys(Object.keys(data));
          setValues(Object.values(data));
          openModal(data);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 384 512"
        >
          <path d="..." />
        </svg>
        <div className="card-content d-flex flex-column align-items-start justify-content-center gap-2">
          <div className="title-ps">
            <h5
              style={{
                fontWeight: "600",
                color: "#2E2545",
                textAlign: "left",
                maxHeight: "40px",
                marginBottom: "0px",
              }}
            >
              {data["Title of Problem"]}
            </h5>
          </div>
          <h6 style={{ fontWeight: "600", color: "#8585BD" }}>{problemId}</h6>
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
           <img src={image} alt="" className="comp-logo" />
         </div>
         <span className="close" onClick={handleCloseModal}>
           &times;
         </span>

         <section
           className="d-flex align-items-start justify-content-center p-4 flex-column"
           style={{ textAlign: "left" }}
         >
           <h6 className="mb-4 ps-number" style={{ fontWeight: "600" }}>
             {"PS NUMBER: " + ps.id}
           </h6>
           {printData()}
         </section>
       </div>
     </div>

     <Heading text="Problem Statements" position="center"></Heading>

     <div className="d-flex flex-row ps-box">
       {data.map((element, index) => {
         return psCard(element, index);
       })}
     </div>
   </div>
 );

};

export default Problem;