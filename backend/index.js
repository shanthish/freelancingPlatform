const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user');
const Gig=require('./models/gigs');
const cors = require('cors');
const bcrypt = require('bcrypt');
dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    })

app.post('/signup', async (req, res) => {
    let { user_name, email,password, user } = req.body;
    try{
        let check=await User.find({email});
        if(!check.length){
        let new_user=new User({
            user_name,
            email,
            password,
            user
        });
        await new_user.save();
        
        res.status(200).json({new_user,message:true});
    }
    else{
        res.json({message:false});
    }
    }
    catch(err){
        console.log(err);
        res.json({message:false});
    }
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let check = await User.find({ email: email, password: password });
    if (!check.length) {
        res.json({ message: false })
    } else {
        res.status(200).json({ data: check[0], message: true });
    }
});


app.post('/add-gig',async (req,res)=>{
    let {title,description,price,date,delivery_date,revision,features}=req.body;
    try{
        let new_gig=new Gig({
            title,
            description,
            price,
            date,
            delivery_date,
            revision,
            features,
        });
        let user_data=await User.findById('679be099f732dfa38448cbad');
        new_gig.seller_id.push(user_data._id);
        await new_gig.save();
        res.status(200).json({data:user_data,message:true});
    }
    catch(err){
        console.log(err);
        res.json({message:false});
    }          
})

app.get('/seller-get-gig/:id',async(req,res)=>{
    let id=req.params.id;
    let gig_details=await Gig.find({seller_id:id});
    res.status(200).json(gig_details); 
})

app.get('/buyer-get-gig',async(req,res)=>{
    try{
        let gig_details=await Gig.find({});
        res.status(200).json({data:gig_details});
    }
    catch(err){
        console.log(err);
    }
    
})

app.get('/delete-gig/:id',async(req,res)=>{
    let id=req.params.id;
    console.log(id);
    
    let deletedData=await Gig.deleteOne({_id:id});
    console.log(deletedData);
    if(deletedData.deletedCount){
        res.status(200).json({message:true});
    }
    else{
        res.json({message:false})
    }
})


app.listen(8080, () => {
    console.log('server connected');
})
