const express = require('express');
const router = express.Router()
const {body} = require('express-validator')
const captainController = require('../controllers/captain.controller')
const authMiddleware = require("../middlewares/auth.middleware")
router.post('/register',[
    body('email').isEmail().withMessage('Inavlid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('password must be 6 characters long'),
    body('vechile.color').isLength({min:3}).withMessage('color must be 6 characters long'),
    body('vechile.plate').isLength({min:3}).withMessage('plate must be 6 characters long'),
    body('vechile.capacity').isLength({min:1}).withMessage('capacity must be 6 characters long'),
    body('vechile.vechileType').isIn(['car' , 'motorcycle' , 'auto']).withMessage("Invalid Vechile Type"),
    
], captainController.registerCaptain )


router.post('/login', [
    body('email').isEmail().withMessage('Inavlid Email'),
    body('password').isLength({min:6}).withMessage('password must be 6 characters long'),
] , captainController.loginCaptain)

router.get('/profile' , authMiddleware.authCaptain , captainController.getCaptainProfile)
router.get('/logout' , authMiddleware.authCaptain , captainController.logoutCaptain)

module.exports =  router