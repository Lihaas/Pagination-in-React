const express = require('express')
const multer = require('multer')
const router = new express.Router()
var mongoose = require('mongoose');
const Data = require('../model/data')

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        cb(null , new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})

const fileFilter = (req,file,cb) =>{

    if(file.mimetype === "text/csv" ){
        cb(null,true)
    }
    else{
        cb("Please upload only csv file.",false)
    }

}

const upload = multer({
    storage : storage,
    fileFilter:fileFilter
})

router.post('/v1/uploadcsv',upload.single('csv'),async(req,res)=>{

    console.log(req.body)

    const filePath =req.file.path
 try {
    const csvFilePath= filePath
    const csv=require('csvtojson')
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
       
       Data.insertMany(jsonObj).then(function(){
        console.log("Data inserted")  
    }).catch(function(error){
        console.log(error)      
    });

       res.send(200)

    })
     
         } catch (error) {
             res.status(500).send(error)
         }



})

router.get('/v1/getData',async(req,res)=>{

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const results = {}
      
        try{
            const totalResult = await Data.find().countDocuments()
            results.searchResult   = await Data.find().limit(limit).skip(startIndex).exec()
            if (endIndex < totalResult) {
                results.next = {
                    page: page + 1,
                    limit: limit
                   
                }
                }
                if (startIndex > 0) {
                results.previous = {
                    page: page - 1,
                    limit: limit
                }
                }
                results.totalPages ={
                    totalPages : totalResult
                }
                return    res.status(200).send(results)
        }catch(e){
            res.status(500).json({ message: e.message })
           }
          

})


router.post('/v1/dataUpload',async(req,res)=>{

  data = req.body
try {

    
    Data.insertMany(data).then(function(){
        res.status(200).send()  
    }).catch(function(error){
        res.status(400).send()        
    });


} catch (error) {
    res.status(500).send() 
}



})





module.exports = router
