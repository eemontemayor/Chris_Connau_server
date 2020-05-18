const express = require('express')

const carouselRouter = express.Router()

carouselRouter.route('/')
.get((req,res,next) =>{

    const imgArray = [
    'https://s7.gifyu.com/images/6carousel.jpg',
    'https://s7.gifyu.com/images/5carousel.jpg',
    'https://s7.gifyu.com/images/4carousel.jpg',
   'https://s7.gifyu.com/images/3carousel.jpg',
    'https://s7.gifyu.com/images/2carousel.jpg',
    'https://s7.gifyu.com/images/1carousel.jpg']
   
   
 res.json(imgArray)


})
module.exports = carouselRouter