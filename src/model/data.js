const mongoose = require('mongoose')


const data_schema = new mongoose.Schema({
    
    CategoryName:{
        type:String
    },
    StoreName:{
        type:String
    },
    SerialNumber:{
        type:String
    },
    ImageLink:{
        type:String
    },
    MetaKeywords:{
        type:String
    },
    Metadescription:{
        type:String
    },
    Headline:{
        type:String
    },
    Description:{
        type:String
    }
    
    
},

{
    timestamps:true
})




const Datas = mongoose.model('data',data_schema)



module.exports = Datas