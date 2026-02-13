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
        <div className="card-page-wrapper">
            {/* Header info placed above the card */}
            <div className="card-header-info">
                <h4 className="to">To: {card?.receiver_name}</h4>
                <h4 className="class">Class: {card?.receiver_class}</h4>
            </div>

            <div className="card-container">
                <img 
                    src={selectedTemplate(card?.card_template)} 
                    alt="card" 
                    className="card-img" 
                />
                <div className="content">
                    <p className="msg">{card?.message}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;