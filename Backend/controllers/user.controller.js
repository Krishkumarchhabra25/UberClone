const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator")


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
  