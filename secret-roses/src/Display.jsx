import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Display.css";
import "./Homepage.css";
import supabase from "./SupabaseClient"
import red from "./components/red_env.png";
import pink from "./components/pink_env.png";
import beige from "./components/beige_env.png";
import green from "./components/green_env.png";



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
    const {data, error} =await supabase
    .from("cards")
    .select("*");

    if (error) {
        console.error("Error fetching data:", error);
    }   
    else {
        console.log("Data fetched successfully:", data);
        console.log(data.length)
        setCards(data);
        }
    };
    return(
        
        <div className="gallery d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            
            {/*add search bar later */}
            {/*gallery heading as pic - add later */}
            <div className="card-grid-2" >
                {cards?.map((card) => (
                    <div key={card.id} className="card m-3 mb-3 mt-3" style={{width: "100px",height:"55px"}} onClick={() => navigate("/card",{state: card})}>
                        <img 
                        src={templates[card.card_template?.trim().toLowerCase()] || red} 
                        className="card-img-top" 
                        alt={card.receiver_name}
                        style={{width: "100px", height: "55px"}}
                        onClick={() => navigate("/card",{state: card})}/>
                        
                        <p className="card-title mt-2 mb-5">{card.receiver_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
  
}
export default Gallery;