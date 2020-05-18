const express = require('express')

const galleryRouter = express.Router()

galleryRouter.route('/')
.get((req,res,next) =>{


    // to do ::: return nested array

    

    const imgArray = [
    'https://s7.gifyu.com/images/6carousel.md.jpg',
    'https://s7.gifyu.com/images/5carousel.md.jpg',
    'https://s7.gifyu.com/images/4carousel.md.jpg',
    'https://s7.gifyu.com/images/3carousel.md.jpg',
    'https://s7.gifyu.com/images/2carousel.md.jpg',
    'https://s7.gifyu.com/images/1carousel.md.jpg']
   
   console.log('imgArray from gall', imgArray)
 res.json(imgArray)


})
module.exports = galleryRouter