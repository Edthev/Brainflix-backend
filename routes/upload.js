const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const randomID = uuidv4;

const DATA = "./data/video-details.json";

const readVideos = () => {
   const videoData = fs.readFileSync(DATA);
   const videos = JSON.parse(videoData);
   return videos;
};

router
   .get("/", (req, res) => {
      console.log("get request to upload");
   })
   .post("/", (req, res) => {
      let timeOfRequest = Date.now();
      const newVideo = {
         id: randomID(),
         title: req.body.title,
         channel: "user1",
         image: req.body.image,
         description: req.body.description,
         views: 0,
         likes: 0,
         duration: null,
         video: null,
         timestamp: timeOfRequest,
      };
      const videos = readVideos();
      videos.push(newVideo);
      fs.writeFileSync(DATA, JSON.stringify(videos));

      res.status(201).json(videos);
      console.log("Successful Wrote: ", req.body.title);
   });
module.exports = router;
