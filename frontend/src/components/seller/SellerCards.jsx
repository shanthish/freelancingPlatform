import SellerCard from "./SellerCard";

// import Sellercard
const SellerCards=({gig_details,})=>{
    return (
        <div className="seller-cards">
           {
            gig_details.map((gig)=>(<SellerCard 
                title={gig.title} 
            description={gig.description}
            price={gig.price}
            features={gig.features}
            delivery_date={gig.delivery_date}
            id={gig._id}
            />
            ))

           }
        </div>
        
    );
}
export default SellerCards;