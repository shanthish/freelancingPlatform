import BuyerCard from "./BuyerCard";

// import Buyercard
const BuyerCards=({gig_details})=>{
    // const details=[];
    return (
        <div className="buyer-cards">
           {
            gig_details.map((gig)=>(<BuyerCard title={gig.title} 
            description={gig.description}
            price={gig.price}
            features={gig.features}
            delivery_date={gig.delivery_date}
            />
            ))

           }
        </div>
        
    );
}
export default BuyerCards;