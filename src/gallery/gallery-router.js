const express = require('express')

const galleryRouter = express.Router()

galleryRouter.route('/')
.get((req,res,next) =>{


    // to do ::: return nested array

  

    const categories = ['nature',
    'architecture'
]
    const natureUrlArr = []
    const architectureUrlArr=[]
   

    categories.forEach(item => makeUrl(item))

    function makeUrl(type){
        console.log('here',type)
        let i = 1
       while(i <=12 ){
           if(type === 'nature'){

               natureUrlArr.push(`https://s7.gifyu.com/images/${type}_${i}.th.jpg`)
           }else if(type === 'architecture'){
                architectureUrlArr.push(`https://s7.gifyu.com/images/${type}_${i}.th.jpg`)

           }
            i++
       }

    }
    const imgUrlArray = [natureUrlArr, architectureUrlArr]
   
   console.log('imgArray from gall', imgUrlArray)
 res.json(imgUrlArray)


})
module.exports = galleryRouter