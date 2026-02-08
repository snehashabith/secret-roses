import { useLocation } from "react-router-dom"
function Card(){
    const location = useLocation();
    const {card} = location.state || {};
    return <div className="card d-flex flex-column justify-content-center align-items-center vh-100 text-center">   
        <h1>Card Details </h1>
        <p>Message: {card?.message}</p>
    </div>
}