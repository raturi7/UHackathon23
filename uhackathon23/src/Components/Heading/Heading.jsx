import React from 'react'
import './Heading.css'
const Heading = (props) => {
    let {text,position}=props
  return (
    <div className='container heading-container' style={{textAlign:position}}>
      <h1 className='heading'>{text}</h1>
    </div>
  )
}

export default Heading
