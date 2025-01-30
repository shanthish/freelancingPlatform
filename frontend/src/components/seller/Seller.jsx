import { useLocation } from "react-router-dom";
import Sellercards from "./SellerCards";
import SellerNavbar from "./SellerNavbar";
import './seller.css'
import { useEffect, useState } from "react";
import axios from "axios";
const Seller=()=>{
    const location=useLocation();
    var[gigs,setGigs]=useState([]);
    var seller_data=location.state;
    console.log(seller_data);
    useEffect(()=>{
        axios.get(`http://localhost:8080/seller-get-gig/${seller_data._id}`)
        .then((res)=>setGigs(res.data))
        .catch((err)=>{console.log(err);})
    },[])
    return(
        
        <div className="seller">
            <SellerNavbar/>
            <h2>welcome to the world of freelancing</h2>
            <Sellercards gig_details={gigs} />
        </div>
    );
}
export default Seller;