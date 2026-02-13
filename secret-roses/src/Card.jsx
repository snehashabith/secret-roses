import { useLocation } from "react-router-dom"
import "./Card.css";
import "./Homepage.css";
import "./Submission.jsx";
import red from "./components/red.png";
import pink from "./components/pink.png";
import beige from "./components/beige.png";
import green from "./components/green.png";

function Card(){
    

    const selectedTemplate=(template) => {
        if (!template) {
            console.log(template);
            return red;
        }

        else {
            const templates = {
        "red": red,
        "pink": pink,
        "beige": beige,
        "green": green};
        return templates[template.trim().toLowerCase()] || red;
        }
    };
    const location = useLocation();
    const card = location.state;
    console.log(card);
    return (
        <div className="body d-flex flex-column justify-content-center align-items-center vh-100 text-center">
              
                <img src={selectedTemplate(card?.card_template)} alt="card" style={{width: "350px", height: "200px"}}/>
                <h2>To: {card?.receiver_name}</h2>
                <h3>Class: {card?.receiver_class}</h3>
                <p>Message: {card?.message}</p>
            
        </div>
    );
}
export default Card;