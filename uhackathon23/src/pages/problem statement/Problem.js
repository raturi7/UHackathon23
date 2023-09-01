import React, { useRef ,useState} from "react";
import "./Problem.css";
import Heading from "../../Components/Heading/Heading";
import upesLogo from './Images/UPES Icon.png'
import data from "./statement.json";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Problem = () => {



  const [ps,setPs]=useState({});
  const [image,setImage]= useState("socs.png");
  const modalRef = useRef(null);
 
useState(()=>{
  setImage('socs.png')
})

  const [keys,setKeys]=useState([])
  const [values,setValues]=useState([])

  function printData() {
    let i = 0;
    let htmlData = [];
    for (i = 2; i < keys.length; i++) {
        
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
  
      
  return (
    <div className="col-6 card-container" key={data.id}>
      <button
        className="card d-flex flex-row align-items-center justify-content-start p-3 pl-4 gap-2 w-100"
        onClick={async () => {
          setPs(data);
          setImage(data.path);
          setKeys(Object.keys(data));
          setValues(Object.values(data));
          openModal(data);
        }}
      >
        <img src={upesLogo} alt="" style={{height:"4em"}} className="img-logo-ps"/>
        <div className="card-content d-flex flex-column align-items-start justify-content-center gap-2">
          <div className="title-ps">
            <h5
              style={{
                fontWeight: "600",
                color: "#fff",
                textAlign: "left",
                maxHeight: "40px",
                marginBottom: "0px",
              }}
              className="title-ps-r"
            >
              {data["Title of Problem Statement"]}
            </h5>
          </div>
          <h6 style={{ fontWeight: "600", color: "#8585BD" }} className="id-ps-r">{data["problem_id"]}</h6>
        </div>
      </button>
    </div>
  );
}


 return (
  <>
  <Navbar/>
   <div className="container problem-statement-card two-margin-top">
     <div ref={modalRef} className="modal">
       {/* Modal content */}
       <div className="modal-content">
         <div className="d-flex justify-content-center">
          
           <img src={require('./Images/'+image)} alt="" className="comp-logo" />
         </div>
         <span className="close" onClick={handleCloseModal}>
           &times;
         </span>

         <section
           className="d-flex align-items-start justify-content-center p-4 flex-column"
           style={{ textAlign: "left" }}
         >
           <p style={{marginBottom: "18px",textAlign:"justify"}} className="blue-title"><b style={{color: "#0043ce"}}>Problem Statement ID:</b> <b>{ps.problem_id}</b></p>
           {printData()}
         </section>
       </div>
     </div>

     <Heading text="Problem Statements" position="center"></Heading>

     <div className="d-flex flex-row ps-box mt-4">
       {data.map((element, index) => {
         return psCard(element, index);
       })}
     </div>
   </div>
   <Footer/>
   </>
 );

};

export default Problem;