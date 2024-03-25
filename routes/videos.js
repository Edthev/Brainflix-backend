const express = require("express");
const router = express.Router();
const fs = require("fs");

const DATA = "./data/video-details.json";

const readVideos = () => {
   const videoData = fs.readFileSync(DATA);
   const videos = JSON.parse(videoData);
   return videos;
};
let videosArray = readVideos();

const getVideoID = (idNum) => {
   return videosArray.length > idNum && idNum >= 0
      ? videosArray[idNum].id.toString()
      : //    videosArray[0].id.toString();
        "error";
};

router.get("/", (req, res) => {
   let videosArray = readVideos();
   res.status(200).json(videosArray);
});

const handleReq = (request) => {
   return (req, res) => {
      const param = req.params.videoID;
      console.log("requested: ", req.params.videoID);
      for (let i = 0; i < videosArray.length; i++) {
         if (param === getVideoID(i)) {
            res.status(200).json(videosArray[i]);
            return console.log("Found");
         }
      }
      console.log("function ended");
   };
};

router.get(`/:videoID`, handleReq());

module.exports = router;
