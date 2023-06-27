import React,{useEffect} from 'react'
import { useLocation } from "react-router";

const ScrollOnTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      if (!location.hash) {
        window.scrollTo(1, 1);
      }
    }, [location]);
  
    return <>{props.children}</>
}

export default ScrollOnTop
