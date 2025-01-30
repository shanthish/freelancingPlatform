const mongoose=require('mongoose');

const GigSchema=mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    date:Date,
    delivery_date:Date,
    revisions:Number,
    features:[{
        type:String,
        required:true
    }],
    seller_id:[{
        type:mongoose.Types.ObjectId,

}]});

const Gig=mongoose.model('Gig',GigSchema);
module.exports=Gig;