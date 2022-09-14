const express= require('express');
const router  = require('./routes/videosRouting');
const mongoose= require("mongoose");
//app
const app=express();

//middleware
app.use(express.json());
app.use('/videos', router);

//routes
//app.get('/', (req,res)=>{
 //  res.json({mess: "Hello"})
//})
mongoose.connect("mongodb+srv://trial:<password>@cluster0.1mkfzzg.mongodb.net/?retryWrites=true&w=majority")
.then(()=> {
   //port
    app.listen(4000, ()=> {
        console.log('Port 4000')
    })

})
.catch((error)=>{
    console.log("error");
});


app.post("/",(req,res)=>{
   res.json({mess: "Hello everyone."});
})

