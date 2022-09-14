const express= require("express");

//express ap
const router= express()

//list of videos
router.get("/", (req, res)=>{
    res.json({mess: "list of videos"});
});
//post
router.post("/", (req, res)=>{
    console.log(req.body)
    res.json({mess: "Post Method"});
});

module.exports= router

