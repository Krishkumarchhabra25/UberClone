const captainModel = require('../models/captain.model');
const captainService = require("../services/captain.service");
const {validationResult} = require("express-validator")
const blackListToken = require("../models/blacklistToken.model")

module.exports.registerCaptain = async(req, res, next)=>{
   const errors = validationResult(req);

   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
   }

   const {fullname, email, password , vechile} = req.body;

   const isCaptainAlreadyExist = await captainModel.findOne({email});

   if(isCaptainAlreadyExist){
    return res.status(400).json({message:'Captain already exist'})
   }
   
   const hashPassword = await captainModel.hashPassword(password);

   const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password:hashPassword,
      color: vechile.color,
      plate: vechile.plate,
      capacity: vechile.capacity,
      vechileType: vechile.vechileType
      
   });

   const token = captain.generateAuthToken();

   res.status(201).json({token , captain})
}

module.exports.loginCaptain = async(req,res, next)=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
   }

   const {email, password}= req.body;
   const captain = await captainModel.findOne({email}).select('+password');

   if(!captain){
      return res.status(400).json({message: "Invalid username and password"});
   }

   const isMatch = await captain.comparePassword(password);

   if(!isMatch){
      return res.status(401).json({message:"Inavlid email or password"});
    }

    const token = captain.generateAuthToken();
    res.cookie('token', token);

    res.status(200).json({token, captain})
}

module.exports.getCaptainProfile = async(req, res, next)=>{
   res.status(200).json({captain:req.captain})
}

module.exports.logoutCaptain = async(req,res,next)=>{
   res.clearCookie('token');
   const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
 await blackListToken.create({token});
 res.status(200).json({message: "Logged Out"})
}