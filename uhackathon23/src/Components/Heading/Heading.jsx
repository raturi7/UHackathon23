import React from 'react'
import './Heading.css'
const Heading = (props) => {
    let {text,position}=props
  return (
    <div className='container heading-container'>
      <h1 className='heading' style={{textAlign:position}}>{text}</h1>
    </div>
  )
}

export default Heading
