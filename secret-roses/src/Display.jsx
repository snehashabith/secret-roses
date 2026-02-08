import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Display.css";
import supabase from "./SupabaseClient"
import red from "./components/red.png";
import pink from "./components/pink.png";
import beige from "./components/beige.png";
import green from "./components/green.png";



function Gallery() {

    const templates = {
        "red": red,
        "pink": pink,
        "beige": beige,
        "green": green
    };

    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { fetchCards(); }, []);

    const fetchCards = async () => {
    const {data, error} = supabase
    .from("cards")
    .select("*");

    if (error) {
        console.error("Error fetching data:", error);
    }   
    else setCards(data);
}
    

    return(
        <div className="gallery d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            {/*add search bar later */}
            {/*gallery heading as pic - add later */}
            <div className="card-grid d-flex justify-content-center align-items-center mb-4" >
                {cards.map((card) => (
                    <div key={card.id} className="card m-3" style={{width: "18rem"}} onClick={() => navigate("/card",{state: {card}})}>
                        <img 
                        src={templates[card.card_template]} 
                        className="card-img-top" 
                        alt={card.receiver_name}
                        />
                        <h5 className="card-title mt-2">{card.receiver_name} - {card.receiver_class}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}   

export default Gallery;