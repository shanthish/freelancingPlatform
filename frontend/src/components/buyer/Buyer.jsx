import { useLocation } from "react-router-dom";
import BuyerCards from "./BuyerCards";
import './buyer.css'
import { useEffect, useState } from "react";
import axios from "axios";
import BuyerNavbar from "./Buyernavbar";
const Buyer=()=>{
    const location=useLocation();
    var[gigs,setGigs]=useState([]);
    var buyer_data=location.state;
    console.log(buyer_data);
    useEffect(()=>{
        axios.get(`http://localhost:8080/buyer-get-gig`)
        .then((res)=>{setGigs(res.data.data);console.log(res.data)})
        .catch((err)=>{console.log(err);})
    },[])
    return(
        
        <div className="buyer">
            <BuyerNavbar/>
            <h2>welcome to the world of freelancing</h2>
           <BuyerCards gig_details={gigs}/>
        </div>
    );
}
export default Buyer;