import "./Submission.css";
import card from "./components/card.png";
import {useState} from "react";
import supabase from "./SupabaseClient.jsx";

function Submission() {
    const [Recipient, setRecipient] = useState("");
    const [YearClass, setYearClass] = useState("");
    const [Message, setMessage] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase
        .from("cards")
        .insert([
            {   receiver_name: Recipient,
                receiver_class: YearClass, 
                message: Message}
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
}
    return(
        <div className="d-flex flex-column justify-content-center display-contents-center vh-100 text-center align-center">
            <div className="d-flex flex-column align-items-center mb-4">
                <img src={card} alt="card" className="mb-4" style={{width: "400px", height: "300px"}}/>
            </div>

            <form className="d-flex flex-column align-items-center "
            onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-3 w-" placeholder="Recipient's Name" required value={Recipient} onChange={(e)=>setRecipient(e.target.value)}/>
                <input type="text" className="form-control mb-3 w-50" placeholder="Year/Class" required value={YearClass} onChange={(e)=>setYearClass(e.target.value)}/>
                <textarea className="form-control mb-3 w-50" placeholder="Your Message" rows="4" required value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button 
                type="submit" 
                className="btn send-rose-btn"
                >Send Rose 💌
                </button>
            </form>
        </div>
    );
}

export default Submission;