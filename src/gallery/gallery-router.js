const express = require('express')

const galleryRouter = express.Router()

galleryRouter.route('/')
.get((req,res,next) =>{




  

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


galleryRouter.route('/picture/:id')
.get((req,res,next) =>{
    console.log('here')
    let id = req.params.id
    console.log('id', id)

   const imgUrl =  `https://s7.gifyu.com/images/${id}.jpg`
    res.json(imgUrl)
})

module.exports = galleryRouter