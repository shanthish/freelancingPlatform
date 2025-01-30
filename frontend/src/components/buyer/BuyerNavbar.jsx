import { useNavigate } from "react-router-dom";

const BuyerNavbar=()=>{
    const navigate=useNavigate();
    const navigateToSignUp=()=>{
        navigate('/signup');
    }
    return (
        <div className="buyer-navbar">
            <h1>FREELANCE</h1>
            <div className="nav-button">
                <button onClick={navigateToSignUp}>Sign Out</button>
            </div>
        </div>
    );
}
export default BuyerNavbar;