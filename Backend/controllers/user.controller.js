const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator")
const blackListToken = require("../models/blacklistToken.model")

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { fullname, email, password } = req.body;
  
    try {
      // Hash the password
      const hashedPassword = await userModel.hashPassword(password);
  
      // Create the user
      const user = await userModel.create({
        fullname: {
          firstname: fullname.firstname,
          lastname: fullname.lastname,
        },
        email,
        password: hashedPassword,
      });
  
      // Generate token
      const token = user.generateAuthToken();
  
      res.status(200).json({ token, user });
    } catch (error) {
      next(error); // Pass to error handler middleware
    }
  };
  
  module.exports.loginUser = async(req,res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if(!user){
      return res.status(401).json({message: "Invalid email or password"})
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
      return res.status(401).json({message:"Inavlid email or password"});
    }
    const token = user.generateAuthToken();
    res.cookie('token', token)
    res.status(200).json({token , user})
  }

  module.exports.getUserProfile = async(req,res,next)=>{
     res.status(200).json(req.user);
  }

  module.exports.logoutUser = async(req,res,next)=>{
     res.clearCookie('token');
     const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
   await blackListToken.create({token});
   res.status(200).json({message: "Logged Out"})
  }