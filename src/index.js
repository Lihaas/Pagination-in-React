const express = require('express')
require('./db/mongoose')
//const path = require('path')
const cors = require('cors')
const path = require('path')


 const uploadRouter = require('./router/dataUpload')
// const userRouter = require('./router/user')
// const payRouter = require('./router/pay')
// const bookingRouter = require('./router/booking')


const publicDirectoryPath = path.join(__dirname,'./public/build')

const app = express()
const port = process.env.PORT || 3001

app.use(express.static(__dirname+'./public/build'))
app.use(cors())
app.use('/uploads', express.static('uploads'));
app.use(express.json())
app.use(uploadRouter)
// app.use(userRouter)
// app.use(bookingRouter)
// app.use(payRouter)
// app.use('/admin',adminRouter)




app.get('/*',(req,res)=>{
    res.sendFile(path.join(publicDirectoryPath, '/index.html'))
})


app.listen(port,()=>{

    console.log('Your server working on port ' + port);
    
})

