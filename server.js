const express = require("express") 
const app = express()   
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json()) 
app.use(morgan('dev'))


//Routes//
app.use("/projects", require("./routes/projectsRouter.js"))

mongoose.connect('mongodb://localhost:27017/portfoliodb', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        
    },
    () => console.log('Connected to the Database')
)

//error handling (morgan)
app.use((err, req, res, next)=>{
  console.log(err)
  return res.send({errMsg: err.message})      
})

app.listen(9000, ()=>{
    console.log("The server is running on port 9000")
  })
  
