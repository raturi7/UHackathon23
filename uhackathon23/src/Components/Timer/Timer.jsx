import { useState, useEffect } from "react";
import './Timer.css'
import img from '../Images/VR Glasses 1.png'
export default function Timer() {
    const calculateTimeLeft = () => {
        const difference = +new Date("September 2, 2023") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
              2,
              "0"
            ),
            hours: String(
              Math.floor((difference / (1000 * 60 * 60)) % 24)
            ).padStart(2, "0"),
            minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
              2,
              "0"
            ),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center flex-column rimer"  style={{height:"100vh",width:"100vw",position:"relative"}}>
        <img src={img} alt="" style={{position:"absolute"}} />
      <h1 className="timer rimer-text">
        {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </h1>
    </div>
  );
}
