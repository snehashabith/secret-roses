import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Display.css";
import "./Homepage.css";
import supabase from "./SupabaseClient";
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
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the search input
    const navigate = useNavigate();

    useEffect(() => { fetchCards(); }, []);

    const fetchCards = async () => {
        const { data, error } = await supabase.from("cards").select("*");
        if (error) {
            console.error("Error fetching data:", error);
        } else {
            setCards(data);
        }
    };

    // This variable handles the "View All vs View Certain Name" logic
    const filteredCards = cards.filter((card) => {
        // If searchTerm is empty, this returns true for everything (View All)
        // If searchTerm has text, it only returns matches (View Certain Name)
        const nameMatch = card.receiver_name?.toLowerCase().includes(searchTerm.toLowerCase());
        const classMatch = card.class_name?.toLowerCase().includes(searchTerm.toLowerCase());
        
        return nameMatch || classMatch;
    });

    return (
        <div className="gallery d-flex flex-column align-items-center vh-100 text-center">
            
            {/* The Search Bar */}
            <div className="search-container mt-4 mb-4" style={{ width: "80%", maxWidth: "400px" }}>
                <input 
                    type="text" 
                    placeholder="   Search name" 
                    className="form-control" // Using Bootstrap class for styling
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="card-grid-2">
                {/* We map over filteredCards instead of cards */}
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => (
                        <div 
                            key={card.id} 
                            className="card m-3" 
                            style={{ width: "100px", height: "55px", cursor: "pointer" }} 
                            onClick={() => navigate("/card", { state: card })}
                        >
                            <img 
                                src={templates[card.card_template?.trim().toLowerCase()] || red} 
                                className="card-img-top" 
                                alt={card.receiver_name}
                                style={{ width: "100px", height: "55px" }}
                            />
                            <p className="card-title mt-2" style={{ fontSize: "12px" }}>
                                {card.receiver_name}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="mt-5 text-muted">No cards found matching "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
}

export default Gallery;