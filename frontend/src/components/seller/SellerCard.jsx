import trophyImage from '../../assets/trophy.png';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SellerCard=({id,title,description,price,features,delivery_date,})=>{
    const navigate=useNavigate();



    var mock_features=features||[];
    let date=new Date(delivery_date);
    let curr_date=new Date();
    let diff=date-curr_date;
    let days=Math.ceil(diff/(1000*60*60*24));

   

    let handleDelete=()=>{
        axios.get(`http://localhost:8080/delete-gig/${id}`)
        .then((res)=>{
            if(res.data.message){
                
                window.location.reload();
            }else{
                alert("deletion unsuccessful");
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="seller-card">
            <span className="header-card">
                                    <p><b>{title}</b></p>
                                    <button>{days} days to go</button>
                                </span>
                                <p className="card-name"><b>{description.toUpperCase()}</b></p>
                                <p>
                                    <img src={trophyImage} alt="Trophy" />
                                    <b>Award :</b>
                                    &nbsp;&nbsp;{price}INR amount
                                </p>
                                {/* {revisions} */}
                                <p><b>Eligibility:</b></p>
                                <ul className="eligibility-list">
                                    {
                                        mock_features.map((feature,index)=>(
                                            <li key={index}>{feature}</li>
                                        ))
                                    }
                                </ul>
                                <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default  SellerCard;