const express = require('express')
// const carpic1 = require('../images/1carousel.jpg')

const carouselRouter = express.Router()

carouselRouter.route('/')
.get((req,res,next) =>{

    const obj = {
        img: carpic1,
        details:'picture numero 1'

    }

    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&')
 


})
module.exports = carouselRouter