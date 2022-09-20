const VideoModel = require("../models/VideoModel");

 //create 
 const createVideo = async (req, res) =>
 {
  //req.body
  const { title, description, url, duration } = req.body;
  try {
    const video = await VideoModel.create({ title, description, url, duration });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mess: "hello post world!"})
};
 module.exports={
  createVideo
 }