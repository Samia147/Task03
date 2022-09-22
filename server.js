const  express= require("express");
const router= require('./routes/videosRouting');
const mongoose= require("mongoose");


//express app
const app=express();

//middleware
app.use(express.json());
app.use('/videos', router);



//routes
app.get('/', (req,res)=>{
 res.json({mess: "Hello"});
})

//get all
//app.post("/",(req,res)=>{
 // res.json({mess: "Hello from post."});
//})

//get single
//app.post("/:id",(req,res)=>{
//    res.json({mess: "Single."});
// })


//get singler
// router.get('/:id',(req,res)=> {
    //res.json({mess:'hello!'})
// })


//database connection
mongoose.connect("mongodb+srv://trial:trial@cluster0.1mkfzzg.mongodb.net/?retryWrites=true&w=majority")
.then(()=> {

    app.listen(4000, ()=> {
        console.log('Port 4000')
    })
})
.catch((error)=>{
   console.log(error);
});