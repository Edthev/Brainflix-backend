const express = require("express");
const app = express();
const cors = require("cors");
// const path = require("path");
const videoRoutes = require("./routes/videos");
const uploadRoutes = require("./routes/upload");
// require("dotenv").config();

// TODO fix port
const PORT = 8069;

const middleware = (req, res, next) => {
   console.log("Requested URL: ", req.url);
   let timeOfRequest = new Date().toString().split(" ").splice(1, 4).join("/");
   console.log(timeOfRequest);
   next();
};

app.use(middleware);

app.use(cors());
app.use(express.json());
app.use("/videos", videoRoutes);
app.use("/upload", uploadRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
