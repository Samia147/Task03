const express= require("express");
const {createVideo } = require("../controllers/videoController");
const videoModel = require("../models/VideoModel");
//const router=require("./routes/videosRouting");

//express ap
const router = express()


//list of videos
router.get("/", (req, res)=>{
    res.json({mess: "list of videos"});
});

// create
//router.post('/', async (req, res) => {
    //req.body
   //const {title, description, url, duration } = req.body
   //try {
         //const video = await VideoModel.create({title, description, url, duration});
        //res.status(200).json(video)
    //} catch (error) {
    //   res.status(400).json({error: error.message})
  // }
  // res.json({mess: "hello post world!"})
//});

//post
router.post('/', createVideo );

module.exports= router;


