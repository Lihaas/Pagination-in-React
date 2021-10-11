const mongoose = require('mongoose')


const file_schema = new mongoose.Schema({
    
    file:{
        type:String,
        unique:true
    }
    
},

{
    timestamps:true
})




const Files = mongoose.model('file',file_schema)



module.exports = Files