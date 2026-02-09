import "./Popup.css";
 function Popup({ message,onClose }){
    return(
        <div className="popup-overlay">
            <div className="popup-content">
                <p>{message}</p>
                <button className="button" onClick={onClose}>OK</button>
            </div>
        </div>
    );
 } 

export default Popup;
