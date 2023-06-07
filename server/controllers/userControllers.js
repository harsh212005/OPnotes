const User = require('../models/userModel')
const asynchandler = require('express-async-handler')
const generateToken = require("../utils/generateToken")

const registerUser = asynchandler(async(req,res)=>{
    const { name ,email,password,pic} = req.body;

    const userExist = await User.findOne({ email });

    if(userExist){
        res.status(400)
        throw new Error("User Already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user) {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generateToken(user._id),

        })
    } else{
        res.status(400)
        throw new Error("Error occured");
    }

    
});

const authUser = asynchandler(async(req,res)=>{
   const email = req.body.email;
   const password = req.body.password;

   const user = await User.findOne({email});
    
  
    if( user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generateToken(user._id),
            
            

        });
    } else{
        res.status(400);
        throw new Error("invalid email");
    }
    
   
    
});
module.exports = {registerUser,authUser};

