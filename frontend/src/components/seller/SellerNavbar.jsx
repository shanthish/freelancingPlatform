
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const SellerNavbar=()=>{
    const navigate=useNavigate();
    const navigateToSignUp=()=>{
        navigate('/signup');
    }
    const AddGig=()=>{
        navigate('/add-gig');
    }
    return (
        <div className="seller-navbar">
            <h1>FREELANCE</h1>
            <div className="nav-button">
                <button onClick={AddGig}>Add Gig</button>
                <button onClick={navigateToSignUp}>Sign Out</button>
            </div>
        </div>
    );
}
export default SellerNavbar;