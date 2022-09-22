const { application } = require("express");
const VideoModel = require("../models/VideoModel");

//get all videos
const getALLVideos = async (req, res) => {
  
  const {title, description, url, duration } = req.body
   try {
     console.log(req.body)
        const video = await VideoModel.find({}).sort({createdAt: -1});
        res.status(200).json(video)
    } catch (error) {
    res.status(400).json({error: error.message})
 }  
};

//get single videos
const getSingleVideo = async (req, res) => {
  const {id}=req.params
   try {
        const video = await VideoModel.findById(id)
        if(!req.body){
          return res.status(400).json({error: 'No such video.'})
        }
        res.status(200).json(video)
    } catch (error) {
    res.status(400).json({error: error.message})
 }  
};
 

 //create 
 const createVideo = async (req, res) => {
  
  const {title, description, url, duration } = req.body
   try {
     console.log(req.body)
        const video = await VideoModel.create({title, description, url, duration});
        res.status(200).json(video)
    } catch (error) {
    res.status(400).json({error: error.message})
 }  
};
 
///to update data

const updateVideo = async (req, res) => {
  const {id}=req.params 
   try {
        const video = await VideoModel.findOneAndUpdate({id:id}, {...req.body})
        if(!video){
          return res.status(400).json({error: 'No such video.'})
        }
        res.status(200).json(video)
    } catch (error) {
    res.status(400).json({error: error.message})
 }  
};
 
//delete video

const deleteVideo = async (req, res) => {
  const {id}=req.params;
   try {
        const video = await VideoModel.findByIdAndDelete(id);
        if(!video){
          return res.status(400).json({error: 'No such video.'})
        }
        res.status(200).json(video)
    } catch (error) {
    res.status(400).json({error: error.message})
 }  
};
 
//export videoController to videoRouting
module.exports={
  createVideo,
  getALLVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo
}