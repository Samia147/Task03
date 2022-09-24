const express= require("express");
const {createVideo, getALLVideos, getSingleVideo, updateVideo, deleteVideo } = require("../controllers/videoController");
const VideoModel = require("../models/VideoModel");
//const videoModel = require("../models/VideoModel");
//const router=require("./routes/videosRouting");

//express ap
const router = express();


 
 
// create
router.post('/', createVideo);

//single video
router.get('/:id', getSingleVideo);

//update video
router.patch('/:id', updateVideo);
//delete video
router.delete('/:id', deleteVideo);

 //now we will use try catch to save data in database
//console.log(req.body)
 // const {title, description, url, duration } = req.body
  //try {
    //console.log(req.body)
      //  const video = await VideoModel.create({title, description, url, duration});
      //  res.status(200).json(video)
   // } catch (error) {
   //  res.status(400).json({error: error.message})
//}
  //res.json({mess: "Post method."})}
//});

//post
//router.post('/', createVideo );

module.exports= router;


