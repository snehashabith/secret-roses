import { useState, useEffect } from "react";
import "./Homepage.css";
import {useNavigate} from "react-router-dom";
function Homepage() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const targetDate = new Date("2026-02-14T00:00:00").getTime();
        const interval = setInterval(() => {
            const now=new Date();
            const diff = targetDate - now.getTime();

            if (diff<=0){
                setTimeLeft("Its Valentine's Day!💗");
            }
            else{
                const days =Math.floor(diff/(1000*60*60*24));
                const hours= Math.floor((diff/(1000*60*60))%24);
                const minutes = Math.floor((diff/(1000*60))%60);
                const seconds = Math.floor((diff/1000)%60);
                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

            }
        },1000);

        return () => clearInterval(interval);
        },[]);
        
    return(
        
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <img src="./components/title_trans.png" alt="Secret Roses Logo" className="mb-4 logo"/>
            <h2 className="dm-sans-light">Send a rose to the one you adore🌹</h2>
            <button 
            className="btn btn-primary btn-sm mt-3 " 
            onClick={()=> navigate("/submission")}>
                Get Started 💌
            </button>
            <p className="mt-4 justify-content-center">Time left until Valentine's Day: {timeLeft}</p>
        </div>
    );
}

export default Homepage;