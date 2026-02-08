import "./Submission.css";
import red from "./components/red.png";
import pink from "./components/pink.png";
import beige from "./components/beige.png";
import green from "./components/green.png";
import {useState} from "react";
import { useNavigate } from "react-router-dom"; 
import supabase from "./SupabaseClient.jsx";

function Submission() {
    const [Recipient, setRecipient] = useState("");
    const [YearClass, setYearClass] = useState("");
    const [Message, setMessage] = useState("");
    const [cardTemplate,setCardTemplate] = useState("");

    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase
        .from("cards")
        .insert([
            {   receiver_name: Recipient,
                receiver_class: YearClass, 
                message: Message,
                card_template: cardTemplate

            }
        ]);

        if (error) {
            console.error("Error inserting data:", error);
        } else {
            console.log("Data inserted successfully:", data);
        }

        //clearing fields after sub
        setRecipient("");
        setYearClass("");
        setMessage("");
        setCardTemplate("");

    
}
    return(
        <div className="d-flex flex-column justify-content-center display-contents-center vh-100 text-center align-center">
            <div className="card-grid d-flex justify-content-center align-items-center mb-4" >
                <img src={red} 
                alt="card" 
                className={cardTemplate === "red" ? "mb-4 selected" : "mb-4"} 
                style={{width: "100px", height: "50px"}}
                onClick={() => setCardTemplate("red")}/>

                <img src={pink} 
                alt="card" 
                className={cardTemplate === "pink" ? "mb-4 selected" : "mb-4"} 
                style={{width: "100px", height: "50px"}} 
                onClick={() => setCardTemplate("pink")}/>
            </div>


            <div className ="card-grid d-flex justify-content-center align-items-center mb-4" >
                <img src={beige} 
                alt="card" 
                className={cardTemplate === "beige" ? "mb-4 selected" : "mb-4"} 
                style={{width: "100px", height: "50px"}} 
                onClick={() => setCardTemplate("beige")}/>

                <img src={green} 
                alt="card" 
                className={cardTemplate === "green" ? "mb-4 selected" : "mb-4"} 
                style={{width: "100px", height: "50px"}} 
                onClick={() => setCardTemplate("green")}/>    

            </div>

            


            <form className="d-flex flex-column align-items-center "
            onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-3 w-50" placeholder="Recipient's Name" required value={Recipient} onChange={(e)=>setRecipient(e.target.value)}/>
                <input type="text" className="form-control mb-3 w-50" placeholder="Year/Class" required value={YearClass} onChange={(e)=>setYearClass(e.target.value)}/>
                <textarea className="form-control mb-3 w-50" maxlength="150" placeholder="Your Message" rows="4" required value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button  
                className="btn next-btn"
                onClick={() => {
                    navigate("/card",
                        state ={
                            recipient: Recipient,
                            yearClass: YearClass,
                            message: Message,
                            cardTemplate: cardTemplate
                        }
                    );
                }}>
                Send Rose 💌
                </button>
            </form>
        </div>
    );
}

export default Submission;