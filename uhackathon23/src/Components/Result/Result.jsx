import React from 'react'
import data from './Result.json'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function psCard(data, index) {
    // Generate the problem ID
    
        
    return (

      <div className="col-6 card-container" key={data.id}>
        <button
          className="card d-flex flex-row align-items-center justify-content-center p-3 pl-4 gap-2 w-100"
        >
          <div className="card-content d-flex flex-column align-items-start justify-content-center gap-2 w-100">
            <div className="title-ps w-100" style={{textAlign:"center !important"}}>
              <h5
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  maxHeight: "40px",
                  marginBottom: "0px",
                  textAlign:"center"
                }}
                className="title-ps-r"
              >
                {data["teamName"]}
              </h5>
            </div>
            <h6 style={{ fontWeight: "600", color: "#8585BD",marginBottom:"0px !important",textAlign:"center !important" }} className="id-ps-r mb-0 w-100">{data["teamId"]}</h6>
          </div>
        </button>
      </div>
    );
  }

function Result() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container problem-statement-card two-margin-top result-card">
    <div className='container heading-container'>
      <h1 className='heading' style={{textAlign:"center"}}>Qualified Teams<i> (Preliminary Round)</i></h1>
    </div>
    <div className="d-flex flex-row ps-box mt-4">
      {data.map((element, index) => {
        return psCard(element, index);
      })}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Result