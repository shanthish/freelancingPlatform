import { useNavigate } from 'react-router-dom';
import trophyImage from '../../assets/trophy.png';
const BuyerCard=({title,description,price,features,delivery_date})=>{
    const navigate=useNavigate();
    var mock_features=features||[];
    let date=new Date(delivery_date);
    let curr_date=new Date();
    let diff=date-curr_date;
    let days=Math.ceil(diff/(1000*60*60*24));
    const buyGig=()=>{
        navigate('/buy');
    }
    return (
        <div className="buyer-card">
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
                                <button onClick={buyGig}>Continue</button>
        </div>
    );
}
export default  BuyerCard;