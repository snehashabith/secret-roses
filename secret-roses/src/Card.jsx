import { useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import "./Card.css";
import "./Submission.jsx";
import red from "./components/red.png";
import pink from "./components/pink.png";
import beige from "./components/beige.png";
import green from "./components/green.png";

function Card() {
    const location = useLocation();

    const cards={
        red:red,
        pink:pink,
        green:green,
        beige:beige
    }
    const navigate=useNavigate();

    return(
        

        <div className="d-flex flex-column justify-content-center display-contents-center vh-100 text-center align-center">
            //preview of card
            <div className="card-preview">
            <img src={cards[location.state.cardTemplate]} alt="card" style={{width: "300px", height: "150px"}}/>
            <h2 className="mt-4">
                To: {location.state.recipient} 
                Class/Year: ({location.state.yearClass})
            </h2>
            <p className="mt-3">{location.state.message}</p>
            </div>
            <button className="btn next-btn mt-4"
                onClick={() => {
                    navigate("/");
                }}
            >
                Done!
            </button>
        </div>

        
    )


}

export default Card;
